"use client"

import { CustomerNavbar } from "@/components/customer-navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Star, Coffee, Users, Zap, Heart, Navigation, Filter, Clock, Map } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

// Mock data for cafés with coordinates
const cafes = [
  {
    id: 1,
    name: "The Coffee House",
    location: "District 1, Ho Chi Minh City",
    rating: 4.8,
    reviews: 324,
    image: "/modern-vietnamese-coffee-shop-interior.jpg",
    distance: "0.5 km",
    priceRange: "$$",
    tags: ["Wi-Fi", "Co-working", "Quiet"],
    openNow: true,
    checkIns: 1250,
    featured: true,
    lat: 10.7769,
    lng: 106.7009,
  },
  {
    id: 2,
    name: "Highlands Coffee",
    location: "District 3, Ho Chi Minh City",
    rating: 4.6,
    reviews: 892,
    image: "/cozy-cafe-plants.png",
    distance: "1.2 km",
    priceRange: "$$",
    tags: ["Wi-Fi", "Group Seating", "Outdoor"],
    openNow: true,
    checkIns: 2100,
    featured: false,
    lat: 10.7823,
    lng: 106.6958,
  },
  {
    id: 3,
    name: "Phúc Long Coffee & Tea",
    location: "District 7, Ho Chi Minh City",
    rating: 4.7,
    reviews: 567,
    image: "/traditional-vietnamese-tea-house.jpg",
    distance: "2.3 km",
    priceRange: "$",
    tags: ["Traditional", "Tea", "Desserts"],
    openNow: false,
    checkIns: 890,
    featured: false,
    lat: 10.7329,
    lng: 106.7196,
  },
  {
    id: 4,
    name: "Cộng Cà Phê",
    location: "District 1, Ho Chi Minh City",
    rating: 4.9,
    reviews: 1203,
    image: "/vintage-vietnamese-cafe.jpg",
    distance: "0.8 km",
    priceRange: "$$",
    tags: ["Vintage", "Instagram-worthy", "Local"],
    openNow: true,
    checkIns: 3400,
    featured: true,
    lat: 10.7756,
    lng: 106.7019,
  },
  {
    id: 5,
    name: "Starbucks Reserve",
    location: "District 2, Ho Chi Minh City",
    rating: 4.5,
    reviews: 445,
    image: "/premium-coffee-bar.jpg",
    distance: "3.1 km",
    priceRange: "$$$",
    tags: ["Premium", "Wi-Fi", "Meeting Space"],
    openNow: true,
    checkIns: 670,
    featured: false,
    lat: 10.7891,
    lng: 106.7217,
  },
  {
    id: 6,
    name: "L'Usine Café",
    location: "District 1, Ho Chi Minh City",
    rating: 4.8,
    reviews: 678,
    image: "/industrial-chic-cafe.jpg",
    distance: "1.5 km",
    priceRange: "$$$",
    tags: ["Boutique", "Brunch", "Design"],
    openNow: true,
    checkIns: 1560,
    featured: true,
    lat: 10.7742,
    lng: 106.7035,
  },
]

export default function DiscoverPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilter, setSelectedFilter] = useState<string>("all")
  const [favorites, setFavorites] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid")
  const [mapLoaded, setMapLoaded] = useState(false)

  const toggleFavorite = (cafeId: number) => {
    setFavorites((prev) => (prev.includes(cafeId) ? prev.filter((id) => id !== cafeId) : [...prev, cafeId]))
  }

  const filteredCafes = cafes.filter((cafe) => {
    const matchesSearch =
      cafe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cafe.location.toLowerCase().includes(searchQuery.toLowerCase())

    if (selectedFilter === "all") return matchesSearch
    if (selectedFilter === "featured") return matchesSearch && cafe.featured
    if (selectedFilter === "nearby") return matchesSearch && Number.parseFloat(cafe.distance) < 2
    if (selectedFilter === "open") return matchesSearch && cafe.openNow

    return matchesSearch
  })

  useEffect(() => {
    if (viewMode === "map" && !mapLoaded) {
      // Dynamically import Leaflet
      import("leaflet").then((L) => {
        // Initialize map
        const map = L.map("cafe-map").setView([10.7769, 106.7009], 13)

        // Add tile layer
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map)

        // Add markers for each café
        filteredCafes.forEach((cafe) => {
          const marker = L.marker([cafe.lat, cafe.lng]).addTo(map)
          marker.bindPopup(`
            <div style="min-width: 200px;">
              <h3 style="font-weight: bold; margin-bottom: 4px;">${cafe.name}</h3>
              <p style="font-size: 12px; color: #666; margin-bottom: 4px;">${cafe.location}</p>
              <div style="display: flex; align-items: center; gap: 4px; margin-bottom: 8px;">
                <span style="color: #f59e0b;">★</span>
                <span style="font-weight: 600;">${cafe.rating}</span>
                <span style="font-size: 12px; color: #666;">(${cafe.reviews})</span>
              </div>
              <a href="/customer/booking?cafe=${cafe.id}" style="display: inline-block; background: #d97706; color: white; padding: 6px 12px; border-radius: 4px; text-decoration: none; font-size: 12px;">Book Now</a>
            </div>
          `)
        })

        setMapLoaded(true)
      })
    }
  }, [viewMode, mapLoaded, filteredCafes])

  return (
    <div className="min-h-screen bg-background">
      <CustomerNavbar />

      {/* Hero Section */}
      <section className="border-b border-border/40 bg-card">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Discover Amazing Cafés</h1>
          <p className="text-muted-foreground text-lg mb-6">
            Find your perfect spot from 500+ partner cafés across Vietnam
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search cafés, locations, or vibes..."
                className="pl-10 h-12 bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters and View Toggle */}
      <section className="border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <Button
                variant={selectedFilter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("all")}
                className={selectedFilter === "all" ? "bg-accent text-accent-foreground" : ""}
              >
                <Filter className="h-4 w-4 mr-2" />
                All Cafés
              </Button>
              <Button
                variant={selectedFilter === "featured" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("featured")}
                className={selectedFilter === "featured" ? "bg-accent text-accent-foreground" : ""}
              >
                <Zap className="h-4 w-4 mr-2" />
                Featured
              </Button>
              <Button
                variant={selectedFilter === "nearby" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("nearby")}
                className={selectedFilter === "nearby" ? "bg-accent text-accent-foreground" : ""}
              >
                <Navigation className="h-4 w-4 mr-2" />
                Nearby
              </Button>
              <Button
                variant={selectedFilter === "open" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter("open")}
                className={selectedFilter === "open" ? "bg-accent text-accent-foreground" : ""}
              >
                <Clock className="h-4 w-4 mr-2" />
                Open Now
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "bg-accent text-accent-foreground" : ""}
              >
                <Coffee className="h-4 w-4 mr-2" />
                Grid
              </Button>
              <Button
                variant={viewMode === "map" ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  setViewMode("map")
                  setMapLoaded(false)
                }}
                className={viewMode === "map" ? "bg-accent text-accent-foreground" : ""}
              >
                <Map className="h-4 w-4 mr-2" />
                Map
              </Button>
            </div>
          </div>
        </div>
      </section>

      {viewMode === "map" ? (
        // Map View
        <section className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <p className="text-muted-foreground">
              {filteredCafes.length} {filteredCafes.length === 1 ? "café" : "cafés"} on map
            </p>
          </div>
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden border border-border">
            <div id="cafe-map" className="w-full h-full" />
          </div>
        </section>
      ) : (
        // Grid View
        <section className="container mx-auto px-4 py-8">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              {filteredCafes.length} {filteredCafes.length === 1 ? "café" : "cafés"} found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCafes.map((cafe) => (
              <Card
                key={cafe.id}
                className="overflow-hidden bg-card border-border hover:border-accent/50 transition-all"
              >
                <div className="relative">
                  <img src={cafe.image || "/placeholder.svg"} alt={cafe.name} className="w-full h-48 object-cover" />
                  {cafe.featured && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                      <Zap className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <button
                    onClick={() => toggleFavorite(cafe.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background transition-colors"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      className={`h-5 w-5 ${favorites.includes(cafe.id) ? "fill-red-500 text-red-500" : "text-foreground"}`}
                    />
                  </button>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-card-foreground">{cafe.name}</h3>
                    <span className="text-muted-foreground text-sm">{cafe.priceRange}</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4" />
                    <span>{cafe.location}</span>
                  </div>

                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-semibold text-card-foreground">{cafe.rating}</span>
                      <span className="text-muted-foreground text-sm">({cafe.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Navigation className="h-4 w-4" />
                      <span>{cafe.distance}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {cafe.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{cafe.checkIns.toLocaleString()} check-ins</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {cafe.openNow ? (
                        <Badge variant="outline" className="text-green-500 border-green-500">
                          Open
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-muted-foreground">
                          Closed
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                      <Link href={`/customer/booking?cafe=${cafe.id}`}>Book Now</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`/customer/cafe/${cafe.id}`}>Details</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredCafes.length === 0 && (
            <div className="text-center py-16">
              <Coffee className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No cafés found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}
        </section>
      )}

      {/* Gamification Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-card border-border p-8">
          <div className="text-center max-w-2xl mx-auto">
            <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-3">Level Up Your Café Game</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Check in at cafés, write reviews, and complete challenges to earn points and unlock exclusive rewards.
            </p>
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/customer/rewards">View Your Rewards</Link>
            </Button>
          </div>
        </Card>
      </section>

      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />
    </div>
  )
}
