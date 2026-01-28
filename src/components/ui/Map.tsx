'use client';

import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { US_CENTER, DEFAULT_ZOOM } from '@/lib/constants';

interface MapPin {
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  tier: 'free' | 'paid' | 'featured';
  slug?: string;
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

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [center.lng, center.lat],
      zoom,
      interactive,
    });

    if (interactive) {
      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }

    pins.forEach((pin) => {
      const color = pin.tier === 'featured' ? '#f59e0b' : pin.tier === 'paid' ? '#ef4444' : '#3b82f6';
      const marker = new mapboxgl.Marker({ color })
        .setLngLat([pin.longitude, pin.latitude])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<div class="p-2"><strong>${pin.title}</strong>${
              pin.slug ? `<br/><a href="/vendors/${pin.slug}" class="text-green-600 text-sm">View Profile</a>` : ''
            }</div>`
          )
        )
        .addTo(map.current!);

      if (onPinClick) {
        marker.getElement().addEventListener('click', () => onPinClick(pin.id));
      }
    });

    return () => {
      map.current?.remove();
    };
  }, [pins, center, zoom, interactive, onPinClick]);

  return <div ref={mapContainer} className={`rounded-xl overflow-hidden ${className}`} />;
}
