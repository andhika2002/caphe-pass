"use client"

import { CustomerNavbar } from "@/components/customer-navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Users, Coffee, Wifi, MapPin, Star, ChevronRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const seatTypes = [
  {
    id: "solo",
    name: "Solo Seat",
    icon: Coffee,
    description: "Perfect for focused work or quiet reading",
    capacity: 1,
    features: ["Power outlet", "Quiet zone", "Individual table"],
  },
  {
    id: "group",
    name: "Group Table",
    icon: Users,
    description: "Ideal for meetings or catching up with friends",
    capacity: "2-6",
    features: ["Spacious table", "Comfortable seating", "Group-friendly"],
  },
  {
    id: "coworking",
    name: "Co-working Corner",
    icon: Wifi,
    description: "Dedicated workspace with premium amenities",
    capacity: "1-4",
    features: ["High-speed Wi-Fi", "Power outlets", "Ergonomic chairs"],
  },
]

const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
]

const mockCafe = {
  id: 1,
  name: "The Coffee House",
  location: "123 Nguyen Hue, District 1, Ho Chi Minh City",
  rating: 4.8,
  reviews: 324,
  image: "/modern-vietnamese-coffee-shop-interior.jpg",
}

export default function BookingPage() {
  const searchParams = useSearchParams()
  const cafeNameFromQuery = searchParams.get("cafe") || mockCafe.name

  const [selectedSeatType, setSelectedSeatType] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [partySize, setPartySize] = useState<number>(1)
  const [step, setStep] = useState<number>(1)

  // Generate next 7 days
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() + i)
    return {
      full: date.toISOString().split("T")[0],
      display: date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }),
      dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
      date: date.getDate(),
    }
  })

  const canProceed = () => {
    if (step === 1) return selectedSeatType !== null
    if (step === 2) return selectedDate !== "" && selectedTime !== ""
    return false
  }

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <CustomerNavbar />

      {/* Café Info Header */}
      <section className="border-b border-border/40 bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <img
              src={mockCafe.image || "/placeholder.svg"}
              alt={mockCafe.name}
              className="w-full md:w-24 h-32 md:h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">{cafeNameFromQuery}</h1>
              <div className="flex flex-col md:flex-row gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{mockCafe.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold text-card-foreground">{mockCafe.rating}</span>
                  <span>({mockCafe.reviews} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="border-b border-border/40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= 1 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                1
              </div>
              <span className={`text-sm ${step >= 1 ? "text-foreground" : "text-muted-foreground"}`}>Seat Type</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= 2 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                2
              </div>
              <span className={`text-sm ${step >= 2 ? "text-foreground" : "text-muted-foreground"}`}>Date & Time</span>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step >= 3 ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                3
              </div>
              <span className={`text-sm ${step >= 3 ? "text-foreground" : "text-muted-foreground"}`}>Confirm</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Step 1: Select Seat Type */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Choose Your Seat Type</h2>
              <p className="text-muted-foreground mb-6">Select the seating arrangement that fits your needs</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {seatTypes.map((type) => {
                  const Icon = type.icon
                  return (
                    <Card
                      key={type.id}
                      className={`p-6 cursor-pointer transition-all ${
                        selectedSeatType === type.id
                          ? "border-accent bg-accent/5"
                          : "border-border hover:border-accent/50"
                      }`}
                      onClick={() => setSelectedSeatType(type.id)}
                    >
                      <Icon className="h-10 w-10 text-accent mb-3" />
                      <h3 className="text-lg font-semibold text-card-foreground mb-1">{type.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                      <Badge variant="secondary" className="mb-3">
                        <Users className="h-3 w-3 mr-1" />
                        {type.capacity} {typeof type.capacity === "number" ? "person" : "people"}
                      </Badge>
                      <ul className="space-y-1">
                        {type.features.map((feature) => (
                          <li key={feature} className="text-xs text-muted-foreground flex items-center gap-1">
                            <div className="w-1 h-1 rounded-full bg-accent" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </Card>
                  )
                })}
              </div>

              {selectedSeatType && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">Party Size</label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPartySize(Math.max(1, partySize - 1))}
                      disabled={partySize <= 1}
                    >
                      -
                    </Button>
                    <span className="text-lg font-semibold text-foreground w-12 text-center">{partySize}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setPartySize(Math.min(10, partySize + 1))}
                      disabled={partySize >= 10}
                    >
                      +
                    </Button>
                    <span className="text-sm text-muted-foreground ml-2">{partySize === 1 ? "person" : "people"}</span>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Select Date & Time</h2>
              <p className="text-muted-foreground mb-6">Choose when you'd like to visit</p>

              {/* Date Selection */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-foreground mb-3">
                  <Calendar className="inline h-4 w-4 mr-2" />
                  Select Date
                </label>
                <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
                  {dates.map((date) => (
                    <button
                      key={date.full}
                      onClick={() => setSelectedDate(date.full)}
                      className={`p-3 rounded-lg border text-center transition-all ${
                        selectedDate === date.full
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-border hover:border-accent/50 text-foreground"
                      }`}
                    >
                      <div className="text-xs text-muted-foreground mb-1">{date.dayName}</div>
                      <div className="text-lg font-semibold">{date.date}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selection */}
              {selectedDate && (
                <div className="mb-8">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    <Clock className="inline h-4 w-4 mr-2" />
                    Select Time
                  </label>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          selectedTime === time
                            ? "border-accent bg-accent/10 text-accent"
                            : "border-border hover:border-accent/50 text-foreground"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Confirm Your Booking</h2>
              <p className="text-muted-foreground mb-6">Review your booking details</p>

              <Card className="p-6 bg-card border-border mb-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between pb-4 border-b border-border">
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1">{mockCafe.name}</h3>
                      <p className="text-sm text-muted-foreground">{mockCafe.location}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Seat Type</div>
                      <div className="font-semibold text-card-foreground">
                        {seatTypes.find((t) => t.id === selectedSeatType)?.name}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Party Size</div>
                      <div className="font-semibold text-card-foreground">
                        {partySize} {partySize === 1 ? "person" : "people"}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Date</div>
                      <div className="font-semibold text-card-foreground">
                        {new Date(selectedDate).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Time</div>
                      <div className="font-semibold text-card-foreground">{selectedTime}</div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-accent/5 border-accent/20 mb-6">
                <div className="flex items-start gap-3">
                  <Coffee className="h-5 w-5 text-accent mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Want to pre-order?</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Add drinks and food to your booking so they're ready when you arrive.
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/pre-order">Add Pre-Order</Link>
                    </Button>
                  </div>
                </div>
              </Card>

              <div className="bg-muted/30 rounded-lg p-4 mb-6">
                <h4 className="font-semibold text-foreground mb-2">Cancellation Policy</h4>
                <p className="text-sm text-muted-foreground">
                  Free cancellation up to 1 hour before your booking time. No-shows may affect your future bookings.
                </p>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-border">
            <Button variant="outline" onClick={handleBack} disabled={step === 1}>
              Back
            </Button>
            {step < 3 ? (
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Continue
              </Button>
            ) : (
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/booking/success">Confirm Booking</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
