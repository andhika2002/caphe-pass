"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, Menu, X, MapPin, Calendar, Gift, User } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity">
            <Coffee className="h-6 w-6 text-accent" />
            <span className="text-xl font-semibold">CaféHub</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/discover"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <MapPin className="h-4 w-4" />
              Discover
            </Link>
            <Link
              href="/booking"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Calendar className="h-4 w-4" />
              Book Now
            </Link>
            <Link
              href="/rewards"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Gift className="h-4 w-4" />
              Rewards
            </Link>
            <Link
              href="/profile"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <User className="h-4 w-4" />
              Profile
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link href="/signup">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/40">
            <div className="flex flex-col gap-4">
              <Link
                href="/discover"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MapPin className="h-4 w-4" />
                Discover
              </Link>
              <Link
                href="/booking"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar className="h-4 w-4" />
                Book Now
              </Link>
              <Link
                href="/rewards"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Gift className="h-4 w-4" />
                Rewards
              </Link>
              <Link
                href="/profile"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="h-4 w-4" />
                Profile
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/40">
                <Button variant="ghost" size="sm" asChild className="w-full">
                  <Link href="/login">Sign In</Link>
                </Button>
                <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
