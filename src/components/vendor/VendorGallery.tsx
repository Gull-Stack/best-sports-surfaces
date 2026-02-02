'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface VendorGalleryProps {
  images: string[];
  vendorName: string;
}

export default function VendorGallery({ images, vendorName }: VendorGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!images.length) return null;

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {images.map((url, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="aspect-video rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
          >
            <img src={url} alt={`${vendorName} project ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
          <button className="absolute top-4 right-4 text-white p-2 hover:bg-surface-card/10 rounded-lg" onClick={() => setLightboxIndex(null)} aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          {lightboxIndex > 0 && (
            <button
              className="absolute left-4 text-white p-2 hover:bg-surface-card/10 rounded-lg"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex - 1); }}
              aria-label="Previous"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
          )}
          {lightboxIndex < images.length - 1 && (
            <button
              className="absolute right-4 text-white p-2 hover:bg-surface-card/10 rounded-lg"
              onClick={(e) => { e.stopPropagation(); setLightboxIndex(lightboxIndex + 1); }}
              aria-label="Next"
            >
              <ChevronRight className="h-8 w-8" />
            </button>
          )}
          <img
            src={images[lightboxIndex]}
            alt={`${vendorName} project ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
