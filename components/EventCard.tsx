import { Calendar, MapPin } from 'lucide-react';
import { ImageWithFallback } from './helpers/ImageWithFallback';

interface EventCardProps {
  image: string;
  title: string;
  date: string;
  location: string;
  category: string;
}

export function EventCard({ image, title, date, location, category }: EventCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 backdrop-blur-sm">
          <span className="text-xs text-foreground">{category}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-3 line-clamp-1">{title}</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}