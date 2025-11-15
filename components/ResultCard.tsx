import { Star, Navigation, Heart, Plus } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './helpers/ImageWithFallback';
import { Button } from './ui/button';
// import { useNavigation } from '../context/NavigationContext';

interface ResultCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  categoryColor: string;
  rating: number;
  reviews: number;
  distance: string;
  description: string;
  tags: string[];
}

export function ResultCard({
  id,
  image,
  title,
  category,
  categoryColor,
  rating,
  reviews,
  distance,
  description,
  tags,
}: ResultCardProps) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div
      className="group flex gap-4 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md cursor-pointer"
      // onClick={() => navigateTo('detail', { id, image, title, location: category, rating, reviews })}
    >
      {/* Image */}
      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32">
        <ImageWithFallback
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div
          className="absolute right-2 top-2 rounded-full px-2 py-1 text-white backdrop-blur-sm"
          style={{ backgroundColor: `${categoryColor}dd` }}
        >
          <span className="text-xs">{category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex items-start justify-between gap-2">
          <div>
            <h4 className="mb-1 line-clamp-1">{title}</h4>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{rating.toFixed(1)}</span>
                <span className="text-xs text-muted-foreground">({reviews})</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Navigation className="h-4 w-4" />
                <span className="text-sm">{distance}</span>
              </div>
            </div>
          </div>
        </div>

        <p className="mb-2 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>

        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-auto flex gap-2">
          <Button
            size="sm"
            className="flex-1 rounded-xl bg-cyan-600 hover:bg-cyan-700"
            onClick={(e) => {
              e.stopPropagation();
              setIsAdded(!isAdded);
            }}
          >
            <Plus className="mr-1 h-4 w-4" />
            {isAdded ? 'Added to Plan' : 'Add to Plan'}
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="rounded-xl"
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
          >
            <Heart
              className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}