import { useState } from 'react';
import { MapPin } from './MapPin';
import { MapHoverCard } from './MapHoverCard';
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { Button } from './ui/button';

interface POI {
  id: string;
  title: string;
  image: string;
  rating: number;
  reviews?: number;
  distance: string;
  category: string;
  categoryColor: string;
  position: { x: number; y: number };
}

interface MapViewProps {
  pois: POI[];
}

export function MapView({ pois }: MapViewProps) {
  const [hoveredPin, setHoveredPin] = useState<string | null>(null);
  const [activePin, setActivePin] = useState<string | null>(null);

  const handlePinClick = (poi: POI) => {
    // navigateTo('detail', {
    //   id: poi.id,
    //   image: poi.image,
    //   title: poi.title,
    //   location: poi.category,
    //   rating: poi.rating,
    //   reviews: poi.reviews || 0,
    // });
  };

  return (
    <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-50 lg:min-h-[600px]">
      {/* Mock Map Background with Grid */}
      <div className="absolute inset-0">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#cbd5e1"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#map-grid)" />
          
          {/* Mock roads/paths */}
          <path
            d="M 0 200 Q 300 180 600 200 T 1200 200"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="3"
            opacity="0.4"
          />
          <path
            d="M 200 0 Q 220 300 200 600"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
            opacity="0.4"
          />
          <path
            d="M 500 0 Q 480 300 500 600"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="2"
            opacity="0.4"
          />
          
          {/* Mock park/green area */}
          <circle cx="70%" cy="30%" r="80" fill="#86efac" opacity="0.2" />
          <circle cx="30%" cy="70%" r="60" fill="#86efac" opacity="0.2" />
          
          {/* Mock building blocks */}
          <rect x="15%" y="20%" width="40" height="40" fill="#cbd5e1" opacity="0.3" rx="4" />
          <rect x="25%" y="35%" width="35" height="35" fill="#cbd5e1" opacity="0.3" rx="4" />
          <rect x="60%" y="50%" width="45" height="45" fill="#cbd5e1" opacity="0.3" rx="4" />
          <rect x="75%" y="60%" width="30" height="30" fill="#cbd5e1" opacity="0.3" rx="4" />
        </svg>
      </div>

      {/* Map Pins */}
      {pois.map((poi) => (
        <div
          key={poi.id}
          className="absolute"
          style={{
            left: `${poi.position.x}%`,
            top: `${poi.position.y}%`,
            transform: 'translate(-50%, -100%)',
          }}
          onMouseEnter={() => setHoveredPin(poi.id)}
          onMouseLeave={() => setHoveredPin(null)}
        >
          <MapPin
            color={poi.categoryColor}
            isActive={activePin === poi.id}
            onClick={() => handlePinClick(poi)}
          />
          
          {/* Hover Card */}
          {(hoveredPin === poi.id || activePin === poi.id) && (
            <div className="absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 animate-in fade-in slide-in-from-top-2">
              <MapHoverCard
                image={poi.image}
                title={poi.title}
                rating={poi.rating}
                distance={poi.distance}
                category={poi.category}
              />
            </div>
          )}
        </div>
      ))}

      {/* Map Controls */}
      <div className="absolute right-4 top-4 flex flex-col gap-2">
        <Button
          size="icon"
          variant="secondary"
          className="h-10 w-10 rounded-xl bg-white shadow-lg hover:bg-gray-50"
        >
          <ZoomIn className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="h-10 w-10 rounded-xl bg-white shadow-lg hover:bg-gray-50"
        >
          <ZoomOut className="h-5 w-5" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          className="h-10 w-10 rounded-xl bg-white shadow-lg hover:bg-gray-50"
        >
          <Maximize2 className="h-5 w-5" />
        </Button>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 rounded-xl bg-white/90 p-3 shadow-lg backdrop-blur-sm">
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-cyan-600" />
            <span>Culture</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-green-600" />
            <span>Nature</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-orange-600" />
            <span>Food</span>
          </div>
        </div>
      </div>
    </div>
  );
}