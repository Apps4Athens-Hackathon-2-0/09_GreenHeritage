import { Button } from "@/components/ui/button";
import {
  Search,
  Map,
  Calendar,
  Compass,
  TrendingUp,
  Landmark,
  TreePine,
  UtensilsCrossed,
  CalendarDays,
  User,
} from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { SpotCard } from "@/components/SpotCard";
import { EventCard } from "@/components/EventCard";
import Link from "next/link";

export default function Home() {
  const categories = [
    { icon: Landmark, label: "Culture", color: "#0891b2", count: 48 },
    { icon: TreePine, label: "Nature", color: "#16a34a", count: 32 },
    {
      icon: UtensilsCrossed,
      label: "Food & Drink",
      color: "#ea580c",
      count: 124,
    },
    { icon: CalendarDays, label: "Events", color: "#7c3aed", count: 28 },
  ];

  const events = [
    {
      id: "evt1",
      image:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800",
      title: "Jazz Festival 2025",
      date: "Nov 20-22",
      location: "City Park",
    },
    {
      id: "evt2",
      image:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800",
      title: "Food & Wine Fair",
      date: "Nov 25",
      location: "Central Square",
    },
    {
      id: "evt3",
      image:
        "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800",
      title: "Art Gallery Opening",
      date: "Dec 1",
      location: "Modern Museum",
    },
  ];

  const popularSpots = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1631656773931-dda2e0c51b26?w=800",
      title: "Historic Cathedral",
      location: "Old Town",
      rating: 4.8,
      reviews: 2341,
    },
    {
      id: "2",
      image: "https://images.unsplash.com/photo-1563273026-d342cef8f723?w=800",
      title: "City Museum",
      location: "Arts District",
      rating: 4.7,
      reviews: 1823,
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
      title: "Mountain Viewpoint",
      location: "West Hills",
      rating: 4.9,
      reviews: 3102,
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-blue-700 to-blue-900 px-4 py-16 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-white">Smart Culture Trip AI</h1>
            <p className="mx-auto max-w-2xl text-lg text-white/90">
              Discover amazing places, events, and experiences in your area
            </p>
          </div>

          {/* Search Bar */}
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col gap-3 rounded-2xl bg-white p-3 shadow-xl sm:flex-row">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search destinations, restaurants, events..."
                  className="w-full rounded-xl border-0 bg-gray-50 py-3 pl-10 pr-4 outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
              <Button className="rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href={"/explore"}>
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
              >
                <Map className="mr-2 h-4 w-4" />
                Explore Map
              </Button>
            </Link>
            <Link href={"/trip"}>
              <Button
                variant="secondary"
                size="sm"
                className="rounded-full bg-white/20 text-white backdrop-blur-sm hover:bg-white/30"
              >
                <Calendar className="mr-2 h-4 w-4" />
                Plan Trip
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2>Browse by Category</h2>
          <Button variant="ghost" className="rounded-xl">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((category, index) => (
            <div key={index}>
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-cyan-600" />
            <h2>Upcoming Events</h2>
          </div>
          <Button variant="ghost" className="rounded-xl">
            View All
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              // "detail", event)}
            >
              <EventCard {...event} />
            </div>
          ))}
        </div>
      </section>

      {/* Popular Spots */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-cyan-600" />
            <h2>Popular Spots</h2>
          </div>
          <Button variant="ghost" className="rounded-xl">
            View All
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {popularSpots.map((spot) => (
            <div
              key={spot.id}
              // onClick={() => navigateTo("detail", spot)}
              className="cursor-pointer"
            >
              <SpotCard {...spot} />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-center shadow-xl sm:p-12">
          <Compass className="mx-auto mb-4 h-12 w-12 text-white" />
          <h2 className="mb-4 text-white">Ready to Start Your Journey?</h2>
          <p className="mb-6 text-lg text-white/90">
            Let our AI assistant create a personalized itinerary just for you
          </p>
          <Link href={"/trips"}>
            <Button
              size="lg"
              className="rounded-2xl bg-white text-cyan-600 hover:bg-gray-100"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Create Your Trip Plan
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
