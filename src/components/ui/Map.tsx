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
        const color = pin.tier === 'featured' ? '#f59e0b' : pin.tier === 'paid' ? '#ef4444' : '#3b82f6';
        const marker = new mapboxgl.Marker({ color })
          .setLngLat([pin.longitude, pin.latitude])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<div class="p-2"><strong>${pin.title}</strong>${
                pin.slug ? `<br/><a href="/vendors/${pin.slug}" style="color: #3a5a40;" class="text-sm">View Profile</a>` : ''
              }</div>`
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
