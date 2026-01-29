'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calculator, Search } from 'lucide-react';
import { Metadata } from 'next';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { sportConfigs, regionalMultipliers, getRegion } from '@/lib/cost-data';
import { formatCurrency } from '@/lib/utils';
import { SPORT_TYPES } from '@/lib/constants';

const US_STATES = [
  'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS',
  'KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY',
  'NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'
];

export default function CostEstimatorPage() {
  const [step, setStep] = useState(0);
  const [sportType, setSportType] = useState('');
  const [width, setWidth] = useState(0);
  const [length, setLength] = useState(0);
  const [surfaceType, setSurfaceType] = useState('');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [state, setState] = useState('');

  const config = sportType ? sportConfigs[sportType] : null;

  const handleSportSelect = (sport: string) => {
    setSportType(sport);
    const c = sportConfigs[sport];
    if (c) {
      setWidth(c.defaultWidth);
      setLength(c.defaultLength);
    }
    setSurfaceType('');
    setSelectedExtras([]);
    setStep(1);
  };

  const toggleExtra = (value: string) => {
    setSelectedExtras((prev) =>
      prev.includes(value) ? prev.filter((e) => e !== value) : [...prev, value]
    );
  };

  const calculateEstimate = () => {
    if (!config || !surfaceType) return null;

    const surface = config.surfaces.find((s) => s.value === surfaceType);
    if (!surface) return null;

    const sqft = width * length;
    const region = state ? getRegion(state) : 'southwest';
    const multiplier = regionalMultipliers[region] || 1;

    const surfaceLow = sqft * surface.costPerSqFt[0] * multiplier;
    const surfaceHigh = sqft * surface.costPerSqFt[1] * multiplier;

    const breakdown: { item: string; low: number; high: number }[] = [
      { item: `${surface.label} (${sqft.toLocaleString()} sq ft)`, low: surfaceLow, high: surfaceHigh },
    ];

    let extrasLow = 0;
    let extrasHigh = 0;
    config.extras
      .filter((e) => selectedExtras.includes(e.value))
      .forEach((extra) => {
        const eLow = extra.cost[0] * multiplier;
        const eHigh = extra.cost[1] * multiplier;
        extrasLow += eLow;
        extrasHigh += eHigh;
        breakdown.push({ item: extra.label, low: eLow, high: eHigh });
      });

    // Site prep estimate (10-15% of surface cost)
    const prepLow = surfaceLow * 0.10;
    const prepHigh = surfaceHigh * 0.15;
    breakdown.unshift({ item: 'Site Preparation & Grading', low: prepLow, high: prepHigh });

    const totalLow = surfaceLow + extrasLow + prepLow;
    const totalHigh = surfaceHigh + extrasHigh + prepHigh;

    return { breakdown, totalLow, totalHigh };
  };

  const estimate = step === 4 ? calculateEstimate() : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-4">
          <Calculator className="h-7 w-7 text-brand" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900">Sports Surface Cost Estimator</h1>
        <p className="text-gray-600 mt-2">Get an instant price range for your project in 5 simple steps.</p>
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-1 mb-8">
        {['Sport', 'Size', 'Surface', 'Extras', 'Results'].map((label, i) => (
          <div key={label} className="flex-1">
            <div className={`h-2 rounded-full ${i <= step ? 'bg-brand' : 'bg-gray-200'}`} />
            <p className={`text-xs mt-1 text-center ${i <= step ? 'text-brand font-medium' : 'text-gray-400'}`}>{label}</p>
          </div>
        ))}
      </div>

      {/* Step 0: Sport Type */}
      {step === 0 && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What type of sports surface do you need?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {SPORT_TYPES.map((sport) => (
              <button
                key={sport.value}
                onClick={() => handleSportSelect(sport.value)}
                className={`p-4 rounded-xl border-2 text-center hover:border-brand transition-colors ${
                  sportType === sport.value ? 'border-brand bg-brand-light' : 'border-gray-200'
                }`}
              >
                <span className="text-2xl block mb-1">{sport.icon}</span>
                <span className="text-sm font-medium text-gray-700">{sport.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Dimensions */}
      {step === 1 && config && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What are the dimensions?</h2>
          <p className="text-sm text-gray-500 mb-4">Standard {config.label} dimensions are pre-filled. Adjust as needed.</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Width (feet)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                min={1}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Length (feet)</label>
              <input
                type="number"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
                min={1}
              />
            </div>
          </div>
          <p className="text-sm text-gray-500">Total area: <strong>{(width * length).toLocaleString()} sq ft</strong></p>
          <div className="flex gap-3 mt-6">
            <Button variant="outline" onClick={() => setStep(0)}><ArrowLeft className="h-4 w-4 mr-1" /> Back</Button>
            <Button onClick={() => setStep(2)} disabled={!width || !length}>Next <ArrowRight className="h-4 w-4 ml-1" /></Button>
          </div>
        </div>
      )}

      {/* Step 2: Surface Type */}
      {step === 2 && config && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose a surface type</h2>
          <div className="space-y-3">
            {config.surfaces.map((surface) => (
              <button
                key={surface.value}
                onClick={() => setSurfaceType(surface.value)}
                className={`w-full p-4 rounded-xl border-2 text-left flex items-center justify-between hover:border-brand transition-colors ${
                  surfaceType === surface.value ? 'border-brand bg-brand-light' : 'border-gray-200'
                }`}
              >
                <span className="font-medium text-gray-900">{surface.label}</span>
                <span className="text-sm text-gray-500">
                  {formatCurrency(surface.costPerSqFt[0])} - {formatCurrency(surface.costPerSqFt[1])} / sq ft
                </span>
              </button>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <Button variant="outline" onClick={() => setStep(1)}><ArrowLeft className="h-4 w-4 mr-1" /> Back</Button>
            <Button onClick={() => setStep(3)} disabled={!surfaceType}>Next <ArrowRight className="h-4 w-4 ml-1" /></Button>
          </div>
        </div>
      )}

      {/* Step 3: Extras & Location */}
      {step === 3 && config && (
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Add extras & select location</h2>
          <div className="space-y-3 mb-6">
            {config.extras.map((extra) => (
              <label
                key={extra.value}
                className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer hover:border-brand transition-colors ${
                  selectedExtras.includes(extra.value) ? 'border-brand bg-brand-light' : 'border-gray-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={selectedExtras.includes(extra.value)}
                    onChange={() => toggleExtra(extra.value)}
                    className="rounded border-gray-300 text-brand focus:ring-brand"
                  />
                  <span className="font-medium text-gray-900">{extra.label}</span>
                </div>
                <span className="text-sm text-gray-500">
                  {formatCurrency(extra.cost[0])} - {formatCurrency(extra.cost[1])}
                </span>
              </label>
            ))}
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">State (for regional pricing)</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-gray-900"
            >
              <option value="">Select state (optional)</option>
              {US_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setStep(2)}><ArrowLeft className="h-4 w-4 mr-1" /> Back</Button>
            <Button onClick={() => setStep(4)}>See Estimate <ArrowRight className="h-4 w-4 ml-1" /></Button>
          </div>
        </div>
      )}

      {/* Step 4: Results */}
      {step === 4 && estimate && config && (
        <div>
          <Card padding="lg" className="bg-brand-light border-brand-100 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">Estimated Cost Range</h2>
            <p className="text-3xl font-bold text-brand-hover">
              {formatCurrency(estimate.totalLow)} &ndash; {formatCurrency(estimate.totalHigh)}
            </p>
            <div className="flex gap-2 mt-2">
              <Badge variant="green">{config.label}</Badge>
              <Badge variant="blue">{(width * length).toLocaleString()} sq ft</Badge>
              {state && <Badge variant="gray">{state}</Badge>}
            </div>
          </Card>

          <Card padding="md" className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Cost Breakdown</h3>
            <div className="space-y-2">
              {estimate.breakdown.map((item) => (
                <div key={item.item} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                  <span className="text-gray-700">{item.item}</span>
                  <span className="text-sm font-medium text-gray-900">
                    {formatCurrency(item.low)} &ndash; {formatCurrency(item.high)}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between pt-2 font-bold text-gray-900">
                <span>Total Estimate</span>
                <span>{formatCurrency(estimate.totalLow)} &ndash; {formatCurrency(estimate.totalHigh)}</span>
              </div>
            </div>
          </Card>

          <Card padding="md" className="bg-gray-50 mb-6">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> These are rough estimates based on national averages and regional adjustments.
              Actual costs vary based on site conditions, material choices, labor rates, and other factors.
              Get exact quotes from local contractors for accurate pricing.
            </p>
          </Card>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/search?sport=${sportType}${state ? `&state=${state}` : ''}`}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-brand text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-hover transition-colors"
            >
              <Search className="h-5 w-5" /> Get Exact Quotes from Contractors
            </Link>
            <Button variant="outline" onClick={() => { setStep(0); setSportType(''); setSelectedExtras([]); setSurfaceType(''); }}>
              Start Over
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
