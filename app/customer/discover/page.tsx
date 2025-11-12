"use client"

import { useState } from "react"
import { Heart, MapPin, Phone, Mail, Clock, Users, Wifi, Star, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CustomerNavbar } from "@/components/customer-navbar"
import Link from "next/link"

const CAFES = [
  {
    id: 1,
    name: "The Golden Bean",
    location: "123 Nguyen Hue St, Ho Chi Minh",
    phone: "+84 28 3821 5555",
    email: "hello@goldenbbean.vn",
    rating: 4.8,
    reviews: 234,
    distance: "0.8 km",
    status: "Open",
    image: "/modern-vietnamese-coffee-shop.jpg",
    tags: ["WiFi", "Solo", "Groups"],
    hours: "6:00 AM - 10:00 PM",
    capacity: 45,
    wifi: "GoldenBean2024",
  },
  {
    id: 2,
    name: "Hanoi Heritage",
    location: "456 Tran Hung Dao, Hanoi",
    phone: "+84 24 3938 2222",
    email: "info@hanoiheritage.vn",
    rating: 4.6,
    reviews: 189,
    distance: "1.2 km",
    status: "Open",
    image: "/traditional-vietnamese-tea-house.jpg",
    tags: ["Groups", "Events", "WiFi"],
    hours: "7:00 AM - 11:00 PM",
    capacity: 60,
    wifi: "HanoiHeritage_Guest",
  },
  {
    id: 3,
    name: "Saigon Brew",
    location: "789 Le Loi, Ho Chi Minh",
    phone: "+84 28 3827 1111",
    email: "contact@saigonbrew.vn",
    rating: 4.5,
    reviews: 156,
    distance: "2.1 km",
    status: "Open",
    image: "/cozy-cafe-plants.jpg",
    tags: ["WiFi", "Coworking", "Solo"],
    hours: "6:30 AM - 9:30 PM",
    capacity: 40,
    wifi: "SaigonBrew_Free",
  },
  {
    id: 4,
    name: "Da Nang Studio",
    location: "321 Bach Dang, Da Nang",
    phone: "+84 236 3821 888",
    email: "studio@danangcafe.vn",
    rating: 4.7,
    reviews: 201,
    distance: "3.5 km",
    status: "Closed",
    image: "/industrial-chic-cafe.jpg",
    tags: ["Events", "Groups", "WiFi"],
    hours: "8:00 AM - 11:00 PM",
    capacity: 80,
    wifi: "DaNangStudio",
  },
]

export default function DiscoverPage() {
  const [selectedCafe, setSelectedCafe] = useState<(typeof CAFES)[0] | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [favorites, setFavorites] = useState<number[]>([])

  const filteredCafes = CAFES.filter(
    (cafe) =>
      cafe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cafe.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CustomerNavbar />

      <main className="max-w-6xl mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-2">Discover Cafés</h1>
          <p className="text-muted-foreground">Find your perfect coffee spot in Vietnam</p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search cafés by name or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full h-12 px-4 bg-card border-border placeholder:text-muted-foreground"
          />
        </div>

        {/* Café Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCafes.map((cafe) => (
            <Card key={cafe.id} className="overflow-hidden hover:shadow-lg transition-shadow border-border">
              {/* Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={cafe.image || "/placeholder.svg"}
                  alt={cafe.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => toggleFavorite(cafe.id)}
                    className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                  >
                    <Heart
                      className={`h-5 w-5 ${favorites.includes(cafe.id) ? "fill-red-500 text-red-500" : "text-white"}`}
                    />
                  </button>
                </div>
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      cafe.status === "Open" ? "bg-green-500/90 text-white" : "bg-red-500/90 text-white"
                    }`}
                  >
                    {cafe.status}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-card-foreground mb-1">{cafe.name}</h3>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(cafe.rating) ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {cafe.rating} ({cafe.reviews})
                    </span>
                  </div>
                </div>

                {/* Location & Distance */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span>{cafe.distance}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cafe.tags.map((tag) => (
                    <span key={tag} className="inline-block px-2 py-1 text-xs rounded-full bg-accent/20 text-accent">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    onClick={() => setSelectedCafe(cafe)}
                  >
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredCafes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No cafés found matching your search</p>
          </div>
        )}
      </main>

      {/* Details Modal */}
      {selectedCafe && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl bg-card border-border">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-2">{selectedCafe.name}</h2>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(selectedCafe.rating)
                              ? "fill-yellow-500 text-yellow-500"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {selectedCafe.rating} ({selectedCafe.reviews} reviews)
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCafe(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Location */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Location</p>
                      <p className="text-card-foreground">{selectedCafe.location}</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Phone</p>
                      <p className="text-card-foreground">{selectedCafe.phone}</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                      <p className="text-card-foreground">{selectedCafe.email}</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Hours</p>
                      <p className="text-card-foreground">{selectedCafe.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Capacity */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Capacity</p>
                      <p className="text-card-foreground">{selectedCafe.capacity} seats</p>
                    </div>
                  </div>
                </div>

                {/* WiFi */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <Wifi className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">WiFi Password</p>
                      <p className="text-card-foreground font-mono text-sm">{selectedCafe.wifi}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link href={`/customer/booking?cafe=${selectedCafe.name}`}>Book Now</Link>
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <a href={`tel:${selectedCafe.phone}`}>Call</a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
