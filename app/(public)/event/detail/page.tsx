"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Share2,
  Plus,
  Navigation,
  Clock,
  MapPin,
  Phone,
  Globe,
  DollarSign,
  Accessibility,
  Volume2,
  Car,
  Star,
  Info,
  Map as MapIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/helpers/ImageWithFallback";
// import { ReviewCard } from '@/components/ReviewCard';
// import { SimilarPlaceCard } from '@/components/SimilarPlaceCard';
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Detail() {
  const [isFavorited, setIsFavorited] = useState(false);

  const placeData = useSearchParams();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
          <ImageWithFallback
            src={placeData.get("image")!}
            alt={placeData.get("title")!}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Back Button */}
          <div className="absolute left-4 top-4">
            <Link href={"/"}>
              <Button
                size="icon"
                variant="secondary"
                className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Share Button */}
          <div className="absolute right-4 top-4">
            <Button
              size="icon"
              variant="secondary"
              className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="mx-auto max-w-7xl">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded-full bg-blue-600 px-3 py-1 text-xs text-white">
                  Culture
                </span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white backdrop-blur-sm">
                  Historical Site
                </span>
              </div>
              <h1 className="mb-2 text-white">{placeData.get("title")}</h1>
              <div className="flex items-center gap-4 text-white/90">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span>{placeData.get("rating")}</span>
                  <span className="text-sm">
                    ({placeData.get("reviews")} reviews)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">
                    {placeData.get("location")}, 0.8 km away
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="sticky top-0 z-10 border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex flex-wrap gap-3">
            <Button className="flex-1 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 sm:flex-none">
              <Plus className="mr-2 h-5 w-5" />
              Add to Plan
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsFavorited(!isFavorited)}
              className="rounded-2xl"
            >
              <Heart
                className={`mr-2 h-5 w-5 ${isFavorited ? "fill-red-500 text-red-500" : ""}`}
              />
              <span className="hidden sm:inline">Favorite</span>
            </Button>
            <Button variant="outline" className="rounded-2xl">
              <Navigation className="mr-2 h-5 w-5" />
              Navigate
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="space-y-6">
          {/* About Section */}
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Info className="h-5 w-5 text-blue-600" />
              <h2>About</h2>
            </div>
            <p className="mb-4 leading-relaxed text-muted-foreground">
              A magnificent example of Gothic architecture dating back to the
              13th century, the Historic Cathedral stands as one of the city{"'"}s
              most iconic landmarks. With its soaring spires, intricate stone
              carvings, and stunning stained glass windows, this UNESCO World
              Heritage site offers visitors a glimpse into medieval
              craftsmanship and religious history.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              The cathedral features daily guided tours, a museum with
              historical artifacts, and access to the bell tower which provides
              panoramic views of the entire city. The building underwent
              extensive restoration in the 1990s and continues to serve as both
              a place of worship and a major tourist attraction.
            </p>
          </section>

          {/* Location & Hours */}
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <MapIcon className="h-5 w-5 text-blue-600" />
              <h2>Location & Hours</h2>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p className="mb-1">123 Cathedral Square, Old Town</p>
                  <p className="text-sm text-muted-foreground">
                    City Center District, 10001
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <div className="flex-1">
                  <div className="mb-2 flex items-center justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-muted-foreground">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="mb-2 flex items-center justify-between">
                    <span>Saturday</span>
                    <span className="text-muted-foreground">
                      9:00 AM - 7:00 PM
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Sunday</span>
                    <span className="text-muted-foreground">
                      12:00 PM - 6:00 PM
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Phone className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <p>+1 (555) 123-4567</p>
              </div>

              <div className="flex gap-3">
                <Globe className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <a href="#" className="text-blue-600 hover:underline">
                  www.historiccathedral.com
                </a>
              </div>

              <div className="flex gap-3">
                <DollarSign className="h-5 w-5 flex-shrink-0 text-muted-foreground" />
                <div>
                  <p className="mb-1">
                    Adults: $15 | Students: $10 | Children under 12: Free
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Audio guide included
                  </p>
                </div>
              </div>
            </div>

            {/* Mini Map Placeholder */}
            <div className="mt-4 h-48 overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 via-cyan-50 to-blue-50">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <MapIcon className="mx-auto mb-2 h-8 w-8 text-blue-600" />
                  <p className="text-sm text-muted-foreground">
                    Interactive map
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility */}
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Accessibility className="h-5 w-5 text-blue-600" />
              <h2>Accessibility</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                <Accessibility className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <div>
                  <p className="mb-1">Wheelchair Accessible</p>
                  <p className="text-sm text-muted-foreground">
                    Ramps and elevators available throughout
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                <Volume2 className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <div>
                  <p className="mb-1">Audio Guide</p>
                  <p className="text-sm text-muted-foreground">
                    Available in 8 languages
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                <Car className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <div>
                  <p className="mb-1">Parking Available</p>
                  <p className="text-sm text-muted-foreground">
                    Underground parking with accessible spaces
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
                <Info className="h-5 w-5 flex-shrink-0 text-blue-600" />
                <div>
                  <p className="mb-1">Service Animals</p>
                  <p className="text-sm text-muted-foreground">
                    Welcome in all areas
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-blue-600" />
                <h2>Reviews</h2>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                <span className="text-2xl">{placeData?.get("rating")}</span>
                <span className="text-muted-foreground">
                  ({placeData?.get("reviews")})
                </span>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="mb-6 space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-3">
                  <span className="w-8 text-sm text-muted-foreground">
                    {rating} ★
                  </span>
                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-200">
                    <div
                      className="h-full rounded-full bg-yellow-400"
                      style={{
                        width: `${rating === 5 ? 75 : rating === 4 ? 15 : rating === 3 ? 6 : rating === 2 ? 3 : 1}%`,
                      }}
                    />
                  </div>
                  <span className="w-12 text-sm text-muted-foreground">
                    {rating === 5
                      ? "75%"
                      : rating === 4
                        ? "15%"
                        : rating === 3
                          ? "6%"
                          : rating === 2
                            ? "3%"
                            : "1%"}
                  </span>
                </div>
              ))}
            </div>

            {/*<div className="space-y-4">
              {reviews.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))}
            </div>*/}

            <Button variant="outline" className="mt-4 w-full rounded-xl">
              View All Reviews
            </Button>
          </section>

          {/* Similar Nearby */}
          {/*<section className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <h2>Similar Nearby</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {similarPlaces.map((place, index) => (
                <div key={index} onClick={() => navigateTo('detail', place)} className="cursor-pointer">
                  <SimilarPlaceCard {...place} />
                </div>
              ))}
            </div>
          </section>*/}
        </div>
      </div>

      {/* Bottom Spacing */}
      <div className="h-8" />
    </div>
  );
}
