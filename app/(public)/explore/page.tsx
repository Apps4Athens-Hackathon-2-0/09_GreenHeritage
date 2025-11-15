"use client";
import { useState } from "react";
import { ArrowLeft, SlidersHorizontal, Map, List } from "lucide-react";
import { FilterPanel } from "@/components/FilterPanel";
import { MapView } from "@/components/MapView";
import { ResultCard } from "@/components/ResultCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Explore() {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"map" | "list">("map");

  // Mock Data
  const pois = [
    {
      id: "1",
      title: "Historic City Hall",
      image:
        "https://images.unsplash.com/photo-1762793214472-ae9de4a424e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGJ1aWxkaW5nJTIwbGFuZG1hcmt8ZW58MXx8fHwxNzYyODUyMDY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Culture",
      categoryColor: "#0891b2",
      rating: 4.8,
      reviews: 1234,
      distance: "0.8 km",
      description:
        "A stunning example of Neo-Gothic architecture from the 19th century, featuring guided tours and historical exhibits.",
      tags: ["Historical", "Guided tours", "Photography"],
      position: { x: 35, y: 40 },
    },
    {
      id: "2",
      title: "Riverside Nature Trail",
      image:
        "https://images.unsplash.com/photo-1753375676074-6a660c5ac264?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjB0cmFpbCUyMHBhcmt8ZW58MXx8fHwxNzYyODUyMDY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Nature",
      categoryColor: "#16a34a",
      rating: 4.7,
      reviews: 892,
      distance: "1.2 km",
      description:
        "Scenic walking trail along the river with diverse wildlife and beautiful viewpoints. Perfect for families and photography.",
      tags: ["Family-friendly", "Pet-friendly", "Free entry"],
      position: { x: 70, y: 30 },
    },
    {
      id: "3",
      title: "La Maison Restaurant",
      image:
        "https://images.unsplash.com/photo-1724589511191-1ced6d014934?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwY2FmZSUyMGRpbmluZ3xlbnwxfHx8fDE3NjI4NTIwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Food",
      categoryColor: "#ea580c",
      rating: 4.9,
      reviews: 2156,
      distance: "0.5 km",
      description:
        "Award-winning French cuisine in an elegant setting. Features seasonal menus and an extensive wine collection.",
      tags: ["Fine dining", "Outdoor seating", "Reservations"],
      position: { x: 50, y: 55 },
    },
    {
      id: "4",
      title: "Contemporary Art Museum",
      image:
        "https://images.unsplash.com/photo-1643820509303-79e98ac7e006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwbXVzZXVtfGVufDF8fHx8MTc2Mjc2NjgwMnww&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Culture",
      categoryColor: "#0891b2",
      rating: 4.6,
      reviews: 1567,
      distance: "1.5 km",
      description:
        "Modern art gallery showcasing contemporary works from local and international artists. Regular exhibitions and events.",
      tags: ["Art", "Family-friendly", "Wheelchair accessible"],
      position: { x: 25, y: 65 },
    },
    {
      id: "5",
      title: "Mountain View Lookout",
      image:
        "https://images.unsplash.com/photo-1536965311256-29a2556155d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjB2aWV3cG9pbnQlMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzYyODUyMDcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Nature",
      categoryColor: "#16a34a",
      rating: 4.9,
      reviews: 3421,
      distance: "2.3 km",
      description:
        "Breathtaking panoramic views of the city and surrounding mountains. Best visited at sunset for spectacular photography.",
      tags: ["Photography", "Free entry", "Scenic views"],
      position: { x: 75, y: 70 },
    },
    {
      id: "6",
      title: "Grand Theatre",
      image:
        "https://images.unsplash.com/photo-1539964604210-db87088e0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwcGVyZm9ybWFuY2UlMjB2ZW51ZXxlbnwxfHx8fDE3NjI4NTIwNjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      category: "Culture",
      categoryColor: "#0891b2",
      rating: 4.7,
      reviews: 987,
      distance: "1.0 km",
      description:
        "Historic performance venue hosting opera, ballet, and theatrical productions. Beautifully restored 1920s architecture.",
      tags: ["Historical", "Events", "Guided tours"],
      position: { x: 60, y: 45 },
    },
  ];

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between border-b bg-white px-4 py-4 shadow-sm sm:px-6">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Button variant="ghost" size="icon" className="rounded-xl">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h2>Explore</h2>
            <p className="text-sm text-muted-foreground">
              {pois.length} places found
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile Filter Toggle */}
          <Button
            variant="outline"
            size="sm"
            className="rounded-xl lg:hidden"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            Filters
          </Button>

          {/* View Mode Toggle */}
          <div className="flex rounded-xl border bg-white p-1 lg:hidden">
            <button
              onClick={() => setViewMode("map")}
              className={`rounded-lg px-3 py-1 text-sm transition-colors ${
                viewMode === "map"
                  ? "bg-cyan-600 text-white"
                  : "text-muted-foreground"
              }`}
            >
              <Map className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`rounded-lg px-3 py-1 text-sm transition-colors ${
                viewMode === "list"
                  ? "bg-cyan-600 text-white"
                  : "text-muted-foreground"
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Filters Sidebar - Desktop */}
        <aside className="hidden w-80 border-r bg-white lg:block">
          <FilterPanel />
        </aside>

        {/* Mobile Filters Overlay */}
        {showFilters && (
          <div
            className="fixed inset-0 z-50 bg-black/50 lg:hidden"
            onClick={() => setShowFilters(false)}
          >
            <div
              className="absolute left-0 top-0 h-full w-80 bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <FilterPanel
                isOpen={showFilters}
                onClose={() => setShowFilters(false)}
              />
            </div>
          </div>
        )}

        {/* Content Area */}
        <main className="flex flex-1 flex-col overflow-hidden lg:flex-row">
          {/* Map View */}
          <div
            className={`${viewMode === "list" ? "hidden lg:block" : "block"} h-1/2 w-full p-4 lg:h-full lg:w-1/2`}
          >
            <MapView pois={pois} />
          </div>

          {/* List View */}
          <div
            className={`${viewMode === "map" ? "hidden lg:block" : "block"} h-1/2 w-full overflow-y-auto bg-gray-50 p-4 lg:h-full lg:w-1/2`}
          >
            <div className="space-y-4">
              {pois.map((poi) => (
                <ResultCard key={poi.id} {...poi} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
