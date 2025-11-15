import { Star, MapPin } from 'lucide-react';
import { ImageWithFallback } from './helpers/ImageWithFallback';

interface SpotCardProps {
  image: string;
  title: string;
  location: string;
  rating: string;
  reviews: string;
}

export function SpotCard({ image, title, location, rating, reviews }: SpotCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-xl">
      <div className="relative h-56 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="mb-2 text-white">{title}</h3>
          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-foreground">{parseFloat(rating).toFixed(1)}</span>
          <span className="text-sm text-muted-foreground">({reviews} reviews)</span>
        </div>
      </div>
    </div>
  );
}