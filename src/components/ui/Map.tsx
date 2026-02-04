'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { US_CENTER, DEFAULT_ZOOM } from '@/lib/constants';

export interface MapPin {
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  tier: 'free' | 'paid' | 'featured';
  slug?: string;
  logo?: string;
  city?: string;
  state?: string;
}

interface MapComponentProps {
  pins?: MapPin[];
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
  onPinClick?: (id: string) => void;
  interactive?: boolean;
}

export default function MapComponent({
  pins = [],
  center = US_CENTER,
  zoom = DEFAULT_ZOOM,
  className = 'h-96',
  onPinClick,
  interactive = true,
}: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !process.env.NEXT_PUBLIC_MAPBOX_TOKEN) return;

    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

    const initMap = (mapCenter: { lat: number; lng: number }, mapZoom: number) => {
      if (!mapContainer.current) return;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [mapCenter.lng, mapCenter.lat],
        zoom: mapZoom,
        interactive,
      });

      if (interactive) {
        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      }

      pins.forEach((pin) => {
        const color = pin.tier === 'featured' ? '#f59e0b' : pin.tier === 'paid' ? '#00e87b' : '#3b82f6';
        const tierLabel = pin.tier === 'featured' ? '⭐ Featured' : pin.tier === 'paid' ? '⭐ Recommended' : '';
        const tierBadge = tierLabel ? `<div style="margin-bottom:10px;"><span style="display:inline-block;background:#00e87b;color:#000;font-size:11px;font-weight:700;padding:4px 10px;border-radius:6px;">${tierLabel}</span></div>` : '';
        const logoHtml = pin.logo ? `<img src="${pin.logo}" alt="" style="width:48px;height:48px;border-radius:10px;object-fit:cover;margin-right:12px;flex-shrink:0;"/>` : '';
        const locationHtml = pin.city && pin.state ? `<div style="font-size:12px;color:#9ca3af;margin-top:2px;">${pin.city}, ${pin.state}</div>` : '';
        
        const marker = new mapboxgl.Marker({ color })
          .setLngLat([pin.longitude, pin.latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25, maxWidth: '300px', className: 'bss-popup' }).setHTML(
              `<div style="padding:12px;font-family:system-ui,sans-serif;background:#1a1a1a;border-radius:12px;">
                ${tierBadge}
                <div style="display:flex;align-items:center;">
                  ${logoHtml}
                  <div>
                    <div style="font-weight:700;font-size:18px;color:#fff;line-height:1.2;">${pin.title}</div>
                    ${locationHtml}
                  </div>
                </div>
                ${pin.slug ? `<a href="/vendors/${pin.slug}" style="display:inline-block;margin-top:14px;background:#00e87b;color:#000;font-weight:700;font-size:13px;padding:10px 20px;border-radius:8px;text-decoration:none;width:100%;text-align:center;box-sizing:border-box;">View Profile →</a>` : ''}
              </div>`
            )
          )
          .addTo(map.current!);

        if (onPinClick) {
          marker.getElement().addEventListener('click', () => onPinClick(pin.id));
        }
      });
    };

    const isDefaultCenter =
      Math.abs(center.lat - US_CENTER.lat) < 0.01 &&
      Math.abs(center.lng - US_CENTER.lng) < 0.01;

    if (isDefaultCenter && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          initMap(
            { lat: position.coords.latitude, lng: position.coords.longitude },
            9
          );
        },
        () => {
          initMap(center, zoom);
        },
        { timeout: 5000 }
      );
    } else {
      initMap(center, zoom);
    }

    return () => {
      map.current?.remove();
    };
  }, [pins, center, zoom, interactive, onPinClick]);

  return <div ref={mapContainer} className={`rounded-xl overflow-hidden ${className}`} />;
}
