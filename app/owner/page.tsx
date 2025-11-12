"use client"

import { OwnerNavbar } from "@/components/owner-navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  Clock,
  AlertCircle,
  ArrowUp,
  ArrowDown,
  BarChart3,
  Percent,
} from "lucide-react"
import Link from "next/link"

const stats = [
  {
    label: "Today's Bookings",
    value: "47",
    change: "+12%",
    trend: "up",
    icon: Calendar,
  },
  {
    label: "Current Occupancy",
    value: "68%",
    change: "32 / 47 seats",
    trend: "neutral",
    icon: Users,
  },
  {
    label: "Revenue Today",
    value: "4.2M VND",
    change: "+8%",
    trend: "up",
    icon: DollarSign,
  },
  {
    label: "Avg. Visit Time",
    value: "1.5 hrs",
    change: "-5 min",
    trend: "down",
    icon: Clock,
  },
]

const upcomingBookings = [
  { time: "2:00 PM", name: "Nguyen Van A", seats: 1, type: "Solo Seat", status: "confirmed" },
  { time: "2:30 PM", name: "Tran Thi B", seats: 4, type: "Group Table", status: "confirmed" },
  { time: "3:00 PM", name: "Le Van C", seats: 2, type: "Co-working", status: "pending" },
  { time: "3:30 PM", name: "Pham Thi D", seats: 1, type: "Solo Seat", status: "confirmed" },
  { time: "4:00 PM", name: "Hoang Van E", seats: 6, type: "Group Table", status: "confirmed" },
]

const peakHours = [
  { hour: "8-9 AM", occupancy: 45, bookings: 12 },
  { hour: "9-10 AM", occupancy: 78, bookings: 23 },
  { hour: "10-11 AM", occupancy: 92, bookings: 31 },
  { hour: "11-12 PM", occupancy: 85, bookings: 28 },
  { hour: "12-1 PM", occupancy: 68, bookings: 19 },
  { hour: "1-2 PM", occupancy: 55, bookings: 15 },
  { hour: "2-3 PM", occupancy: 72, bookings: 21 },
  { hour: "3-4 PM", occupancy: 88, bookings: 27 },
]

const customerInsights = [
  { metric: "Repeat Customers", value: "64%", change: "+5%" },
  { metric: "New Customers", value: "36%", change: "+2%" },
  { metric: "Avg. Spend per Visit", value: "89k VND", change: "+12%" },
  { metric: "No-Show Rate", value: "3.2%", change: "-1.5%" },
]

export default function OwnerDashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <OwnerNavbar />

      {/* Header */}
      <section className="border-b border-border/40 bg-card">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">Owner Dashboard</h1>
              <p className="text-muted-foreground">The Coffee House - District 1</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href="/owner/analytics">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </Link>
              </Button>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/owner/promotions">
                  <Percent className="h-4 w-4 mr-2" />
                  Promotions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="p-6 bg-card border-border">
                <div className="flex items-start justify-between mb-3">
                  <Icon className="h-8 w-8 text-accent" />
                  {stat.trend === "up" && <ArrowUp className="h-5 w-5 text-green-500" />}
                  {stat.trend === "down" && <ArrowDown className="h-5 w-5 text-red-500" />}
                </div>
                <div className="text-3xl font-bold text-card-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
                <div
                  className={`text-xs font-medium ${
                    stat.trend === "up"
                      ? "text-green-500"
                      : stat.trend === "down"
                        ? "text-red-500"
                        : "text-muted-foreground"
                  }`}
                >
                  {stat.change}
                </div>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Bookings */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-card-foreground">Upcoming Bookings</h2>
                <Badge variant="secondary">{upcomingBookings.length} bookings</Badge>
              </div>
              <div className="space-y-3">
                {upcomingBookings.map((booking, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-accent/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-lg font-semibold text-card-foreground">{booking.time}</div>
                      </div>
                      <div>
                        <div className="font-medium text-card-foreground">{booking.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {booking.type} • {booking.seats} {booking.seats === 1 ? "seat" : "seats"}
                        </div>
                      </div>
                    </div>
                    <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>{booking.status}</Badge>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 bg-transparent" asChild>
                <Link href="/owner/bookings">View All Bookings</Link>
              </Button>
            </Card>

            {/* Peak Hours Analysis */}
            <Card className="p-6 bg-card border-border">
              <h2 className="text-xl font-bold text-card-foreground mb-6">Peak Hours Today</h2>
              <div className="space-y-4">
                {peakHours.map((hour) => (
                  <div key={hour.hour}>
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="text-card-foreground font-medium">{hour.hour}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground">{hour.bookings} bookings</span>
                        <span className="font-semibold text-accent">{hour.occupancy}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          hour.occupancy >= 80 ? "bg-red-500" : hour.occupancy >= 60 ? "bg-accent" : "bg-green-500"
                        }`}
                        style={{ width: `${hour.occupancy}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Alerts */}
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                Alerts
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                  <div className="text-sm font-medium text-red-500 mb-1">High Occupancy</div>
                  <div className="text-xs text-muted-foreground">10-11 AM slot is 92% full</div>
                </div>
                <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                  <div className="text-sm font-medium text-yellow-500 mb-1">Low Occupancy</div>
                  <div className="text-xs text-muted-foreground">1-2 PM slot only 55% full</div>
                </div>
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <div className="text-sm font-medium text-blue-500 mb-1">Promotion Opportunity</div>
                  <div className="text-xs text-muted-foreground">Create offer for off-peak hours</div>
                </div>
              </div>
            </Card>

            {/* Customer Insights */}
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold text-card-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-accent" />
                Customer Insights
              </h3>
              <div className="space-y-4">
                {customerInsights.map((insight) => (
                  <div key={insight.metric}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-muted-foreground">{insight.metric}</span>
                      <Badge variant="secondary" className="text-xs">
                        {insight.change}
                      </Badge>
                    </div>
                    <div className="text-lg font-semibold text-card-foreground">{insight.value}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 bg-accent/5 border-accent/20">
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/owner/promotions">Create Promotion</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/owner/menu">Update Menu</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href="/owner/settings">Café Settings</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
