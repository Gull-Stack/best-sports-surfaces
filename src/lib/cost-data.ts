export interface SportConfig {
  label: string;
  defaultWidth: number;
  defaultLength: number;
  surfaces: { value: string; label: string; costPerSqFt: [number, number] }[];
  extras: { value: string; label: string; cost: [number, number] }[];
}

export const sportConfigs: Record<string, SportConfig> = {
  tennis: {
    label: 'Tennis Court',
    defaultWidth: 36,
    defaultLength: 78,
    surfaces: [
      { value: 'hard-court', label: 'Hard Court (Acrylic)', costPerSqFt: [6, 10] },
      { value: 'clay', label: 'Clay Court (Har-Tru)', costPerSqFt: [8, 14] },
      { value: 'grass', label: 'Natural Grass', costPerSqFt: [10, 18] },
      { value: 'synthetic-grass', label: 'Synthetic Grass', costPerSqFt: [8, 15] },
    ],
    extras: [
      { value: 'lighting', label: 'Court Lighting (LED)', cost: [8000, 20000] },
      { value: 'fencing', label: 'Chain Link Fencing (10ft)', cost: [5000, 15000] },
      { value: 'net-posts', label: 'Net & Posts (Competition)', cost: [500, 2000] },
      { value: 'windscreen', label: 'Windscreens', cost: [1000, 3000] },
      { value: 'drainage', label: 'Drainage System', cost: [3000, 8000] },
    ],
  },
  basketball: {
    label: 'Basketball Court',
    defaultWidth: 50,
    defaultLength: 94,
    surfaces: [
      { value: 'concrete', label: 'Concrete (Painted)', costPerSqFt: [4, 8] },
      { value: 'asphalt', label: 'Asphalt (Coated)', costPerSqFt: [3, 6] },
      { value: 'sport-tile', label: 'Modular Sport Tiles', costPerSqFt: [5, 9] },
      { value: 'hardwood', label: 'Indoor Hardwood', costPerSqFt: [10, 20] },
    ],
    extras: [
      { value: 'lighting', label: 'Court Lighting (LED)', cost: [8000, 22000] },
      { value: 'hoops', label: 'Basketball Hoops (Pair)', cost: [1000, 8000] },
      { value: 'fencing', label: 'Perimeter Fencing', cost: [4000, 12000] },
      { value: 'line-marking', label: 'Custom Line Marking', cost: [500, 2000] },
    ],
  },
  pickleball: {
    label: 'Pickleball Court',
    defaultWidth: 20,
    defaultLength: 44,
    surfaces: [
      { value: 'concrete', label: 'Concrete (Coated)', costPerSqFt: [5, 9] },
      { value: 'asphalt', label: 'Asphalt (Acrylic)', costPerSqFt: [4, 7] },
      { value: 'sport-tile', label: 'Modular Sport Tiles', costPerSqFt: [5, 10] },
    ],
    extras: [
      { value: 'lighting', label: 'Court Lighting', cost: [4000, 12000] },
      { value: 'net', label: 'Net System (Portable)', cost: [200, 600] },
      { value: 'fencing', label: 'Perimeter Fencing', cost: [3000, 8000] },
      { value: 'multi-court', label: 'Multi-Court Line Marking', cost: [300, 800] },
    ],
  },
  soccer: {
    label: 'Soccer Field',
    defaultWidth: 210,
    defaultLength: 330,
    surfaces: [
      { value: 'natural-grass', label: 'Natural Grass', costPerSqFt: [2, 5] },
      { value: 'synthetic-turf', label: 'Synthetic Turf', costPerSqFt: [5, 12] },
      { value: 'hybrid', label: 'Hybrid (Natural + Synthetic)', costPerSqFt: [6, 14] },
    ],
    extras: [
      { value: 'lighting', label: 'Field Lighting', cost: [50000, 200000] },
      { value: 'goals', label: 'Goal Posts (Pair)', cost: [2000, 10000] },
      { value: 'irrigation', label: 'Irrigation System', cost: [15000, 50000] },
      { value: 'drainage', label: 'Drainage System', cost: [20000, 60000] },
    ],
  },
  football: {
    label: 'Football Field',
    defaultWidth: 160,
    defaultLength: 360,
    surfaces: [
      { value: 'natural-grass', label: 'Natural Grass', costPerSqFt: [2, 5] },
      { value: 'synthetic-turf', label: 'Synthetic Turf', costPerSqFt: [5, 12] },
    ],
    extras: [
      { value: 'lighting', label: 'Field Lighting', cost: [75000, 300000] },
      { value: 'goalposts', label: 'Goal Posts (Pair)', cost: [3000, 15000] },
      { value: 'field-markings', label: 'Field Markings', cost: [2000, 5000] },
      { value: 'drainage', label: 'Drainage System', cost: [25000, 75000] },
    ],
  },
  baseball: {
    label: 'Baseball Field',
    defaultWidth: 325,
    defaultLength: 325,
    surfaces: [
      { value: 'natural-grass', label: 'Natural Grass Outfield', costPerSqFt: [2, 5] },
      { value: 'synthetic-turf', label: 'Synthetic Turf', costPerSqFt: [5, 12] },
      { value: 'clay-infield', label: 'Clay Infield Mix', costPerSqFt: [3, 7] },
    ],
    extras: [
      { value: 'lighting', label: 'Field Lighting', cost: [100000, 400000] },
      { value: 'backstop', label: 'Backstop & Fencing', cost: [15000, 50000] },
      { value: 'dugouts', label: 'Dugouts (Pair)', cost: [10000, 40000] },
      { value: 'mound', label: 'Pitching Mound', cost: [3000, 10000] },
    ],
  },
  track: {
    label: 'Running Track',
    defaultWidth: 32,
    defaultLength: 1320,
    surfaces: [
      { value: 'rubber', label: 'Polyurethane Rubber', costPerSqFt: [8, 15] },
      { value: 'latex', label: 'Latex Surface', costPerSqFt: [5, 10] },
      { value: 'asphalt-base', label: 'Asphalt Base + Surface', costPerSqFt: [6, 12] },
    ],
    extras: [
      { value: 'lighting', label: 'Track Lighting', cost: [40000, 150000] },
      { value: 'lane-markings', label: 'Lane Markings (8 lanes)', cost: [3000, 8000] },
      { value: 'steeplechase', label: 'Steeplechase Pit', cost: [5000, 15000] },
      { value: 'timing', label: 'Timing System', cost: [5000, 25000] },
    ],
  },
  'multi-sport': {
    label: 'Multi-Sport Court',
    defaultWidth: 60,
    defaultLength: 100,
    surfaces: [
      { value: 'concrete', label: 'Concrete (Multi-line)', costPerSqFt: [5, 9] },
      { value: 'sport-tile', label: 'Modular Sport Tiles', costPerSqFt: [5, 10] },
      { value: 'acrylic', label: 'Acrylic Surface', costPerSqFt: [6, 11] },
    ],
    extras: [
      { value: 'lighting', label: 'Court Lighting', cost: [8000, 25000] },
      { value: 'fencing', label: 'Perimeter Fencing', cost: [5000, 15000] },
      { value: 'equipment', label: 'Multi-Sport Equipment Set', cost: [2000, 8000] },
      { value: 'line-marking', label: 'Multi-Sport Line Marking', cost: [1000, 3000] },
    ],
  },
  volleyball: {
    label: 'Volleyball Court',
    defaultWidth: 30,
    defaultLength: 60,
    surfaces: [
      { value: 'sand', label: 'Beach Volleyball Sand', costPerSqFt: [3, 7] },
      { value: 'hardwood', label: 'Indoor Hardwood', costPerSqFt: [10, 20] },
      { value: 'sport-tile', label: 'Modular Sport Tiles', costPerSqFt: [5, 9] },
    ],
    extras: [
      { value: 'lighting', label: 'Court Lighting', cost: [5000, 15000] },
      { value: 'net', label: 'Net System (Competition)', cost: [500, 2000] },
      { value: 'boundary', label: 'Boundary Lines/Edging', cost: [500, 2000] },
      { value: 'seating', label: 'Spectator Seating', cost: [3000, 15000] },
    ],
  },
  'gym-flooring': {
    label: 'Gym Flooring',
    defaultWidth: 50,
    defaultLength: 80,
    surfaces: [
      { value: 'rubber', label: 'Rubber Flooring', costPerSqFt: [4, 10] },
      { value: 'hardwood', label: 'Hardwood (Maple)', costPerSqFt: [8, 16] },
      { value: 'vinyl', label: 'Vinyl Sport Flooring', costPerSqFt: [3, 8] },
      { value: 'foam', label: 'Foam/EVA Tiles', costPerSqFt: [2, 5] },
    ],
    extras: [
      { value: 'line-marking', label: 'Court Line Marking', cost: [1000, 3000] },
      { value: 'subfloor', label: 'Subfloor System', cost: [5000, 20000] },
      { value: 'padding', label: 'Wall Padding', cost: [2000, 8000] },
    ],
  },
};

export const regionalMultipliers: Record<string, number> = {
  northeast: 1.15,
  southeast: 0.95,
  midwest: 0.90,
  southwest: 1.00,
  west: 1.20,
  northwest: 1.10,
};

export function getRegion(state: string): string {
  const regions: Record<string, string[]> = {
    northeast: ['CT', 'DE', 'MA', 'MD', 'ME', 'NH', 'NJ', 'NY', 'PA', 'RI', 'VT', 'DC'],
    southeast: ['AL', 'AR', 'FL', 'GA', 'KY', 'LA', 'MS', 'NC', 'SC', 'TN', 'VA', 'WV'],
    midwest: ['IA', 'IL', 'IN', 'KS', 'MI', 'MN', 'MO', 'ND', 'NE', 'OH', 'SD', 'WI'],
    southwest: ['AZ', 'NM', 'OK', 'TX'],
    west: ['CA', 'CO', 'HI', 'NV', 'UT'],
    northwest: ['AK', 'ID', 'MT', 'OR', 'WA', 'WY'],
  };
  for (const [region, states] of Object.entries(regions)) {
    if (states.includes(state.toUpperCase())) return region;
  }
  return 'southwest';
}
