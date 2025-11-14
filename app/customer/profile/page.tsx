import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, MapPin, Calendar, Star, Award, Clock, Coffee, Heart, CheckCircle2, TrendingUp, Gift } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { CustomerNavbar } from "@/components/customer-navbar"

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: "Nguyen Van A",
    email: "nguyen.vana@example.com",
    memberSince: "January 2024",
    totalVisits: 47,
    favoriteSpots: 8,
    points: 2450,
    level: "Gold Member",
  }

  // Mock visited cafés data
  const visitedCafes = [
    {
      id: 1,
      name: "The Coffee House",
      location: "District 1, Ho Chi Minh City",
      visits: 12,
      lastVisit: "2 days ago",
      rating: 5,
      image: "/modern-vietnamese-coffee-shop-interior.jpg",
      favorite: true,
    },
    {
      id: 2,
      name: "Highlands Coffee",
      location: "District 3, Ho Chi Minh City",
      visits: 8,
      lastVisit: "1 week ago",
      rating: 4,
      image: "/cozy-cafe-plants.png",
      favorite: true,
    },
    {
      id: 3,
      name: "Trung Nguyen Legend",
      location: "District 2, Ho Chi Minh City",
      visits: 6,
      lastVisit: "2 weeks ago",
      rating: 5,
      image: "/traditional-vietnamese-tea-house.jpg",
      favorite: false,
    },
    {
      id: 4,
      name: "Phúc Long Coffee & Tea",
      location: "District 7, Ho Chi Minh City",
      visits: 5,
      lastVisit: "3 weeks ago",
      rating: 4,
      image: "/vintage-vietnamese-cafe.jpg",
      favorite: true,
    },
    {
      id: 5,
      name: "Cộng Cà Phê",
      location: "District 1, Ho Chi Minh City",
      visits: 4,
      lastVisit: "1 month ago",
      rating: 5,
      image: "/premium-coffee-bar.jpg",
      favorite: false,
    },
    {
      id: 6,
      name: "The Workshop Coffee",
      location: "District 2, Ho Chi Minh City",
      visits: 3,
      lastVisit: "1 month ago",
      rating: 5,
      image: "/industrial-chic-cafe.jpg",
      favorite: false,
    },
  ]

  // Mock recent bookings
  const recentBookings = [
    {
      id: 1,
      cafe: "The Coffee House",
      date: "March 15, 2025",
      time: "2:00 PM",
      seatType: "Solo Seat",
      status: "completed",
    },
    {
      id: 2,
      cafe: "Highlands Coffee",
      date: "March 8, 2025",
      time: "10:00 AM",
      seatType: "Co-working Corner",
      status: "completed",
    },
    {
      id: 3,
      cafe: "Trung Nguyen Legend",
      date: "March 1, 2025",
      time: "4:30 PM",
      seatType: "Group Table (4 people)",
      status: "completed",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <CustomerNavbar />

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">My Profile</h1>
          <p className="text-muted-foreground">Manage your café journey and preferences</p>
        </div>

        {/* User Info Card */}
        <Card className="p-6 mb-8 bg-card border-border">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-shrink-0">
              <div className="h-24 w-24 rounded-full bg-accent/10 flex items-center justify-center">
                <User className="h-12 w-12 text-accent" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-card-foreground mb-1">{user.name}</h2>
                  <p className="text-muted-foreground mb-2">{user.email}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Member since {user.memberSince}</span>
                  </div>
                </div>
                <Badge className="bg-accent/10 text-accent border-accent/20 w-fit">
                  <Award className="h-3 w-3 mr-1" />
                  {user.level}
                </Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Coffee className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-2xl font-bold text-card-foreground">{user.totalVisits}</div>
                    <div className="text-xs text-muted-foreground">Total Visits</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-2xl font-bold text-card-foreground">{user.favoriteSpots}</div>
                    <div className="text-xs text-muted-foreground">Favorites</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-2xl font-bold text-card-foreground">{user.points}</div>
                    <div className="text-xs text-muted-foreground">Points</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <div className="text-2xl font-bold text-card-foreground">{visitedCafes.length}</div>
                    <div className="text-xs text-muted-foreground">Cafés Visited</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Visited Cafés */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">Cafés I've Visited</h2>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/discover">Discover More</Link>
                </Button>
              </div>

              <div className="grid gap-4">
                {visitedCafes.map((cafe) => (
                  <Card key={cafe.id} className="p-4 bg-card border-border hover:border-accent/50 transition-colors">
                    <div className="flex gap-4">
                      <div className="relative h-24 w-24 flex-shrink-0 rounded-lg overflow-hidden bg-muted">
                        <Image src={cafe.image || "/placeholder.svg"} alt={cafe.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-card-foreground mb-1 truncate">{cafe.name}</h3>
                            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                              <MapPin className="h-3 w-3 flex-shrink-0" />
                              <span className="truncate">{cafe.location}</span>
                            </div>
                          </div>
                          {cafe.favorite && <Heart className="h-5 w-5 text-accent fill-accent flex-shrink-0" />}
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Coffee className="h-4 w-4 text-accent" />
                            <span className="text-muted-foreground">{cafe.visits} visits</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-accent" />
                            <span className="text-muted-foreground">Last: {cafe.lastVisit}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 text-accent fill-accent" />
                            <span className="text-muted-foreground">{cafe.rating}.0</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Bookings */}
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Recent Bookings
              </h3>
              <div className="space-y-4">
                {recentBookings.map((booking) => (
                  <div key={booking.id} className="pb-4 border-b border-border/40 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="font-medium text-card-foreground text-sm">{booking.cafe}</h4>
                      <Badge variant="outline" className="text-xs bg-accent/10 text-accent border-accent/20">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        {booking.status}
                      </Badge>
                    </div>
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{booking.time}</span>
                      </div>
                      <div className="text-muted-foreground">{booking.seatType}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent" asChild>
                <Link href="/booking">Book Again</Link>
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-card border-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/rewards">
                    <Gift className="h-4 w-4 mr-2" />
                    View My Rewards
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/pre-order">
                    <Coffee className="h-4 w-4 mr-2" />
                    Pre-Order Now
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/discover">
                    <MapPin className="h-4 w-4 mr-2" />
                    Explore Cafés
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
