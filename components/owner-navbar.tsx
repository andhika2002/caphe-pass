"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Coffee, Menu, X, LayoutDashboard, BarChart3, Megaphone, Settings, UtensilsCrossed } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"

export function OwnerNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/owner" className="flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity">
            <Coffee className="h-6 w-6 text-accent" />
            <span className="text-xl font-semibold">CaféHub Owner</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/owner"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <LayoutDashboard className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              href="/owner/analytics"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <BarChart3 className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              href="/owner/promotions"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Megaphone className="h-4 w-4" />
              Promotions
            </Link>
            <Link
              href="/owner/menu"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <UtensilsCrossed className="h-4 w-4" />
              Menu
            </Link>
            <Link
              href="/owner/settings"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">Switch Role</Link>
            </Button>
            <Button size="sm" variant="outline" className="border-border bg-transparent" asChild>
              <Link href="/auth">Login</Link>
            </Button>
            <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              My Café
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
                href="/owner"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/owner/analytics"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BarChart3 className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                href="/owner/promotions"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Megaphone className="h-4 w-4" />
                Promotions
              </Link>
              <Link
                href="/owner/menu"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <UtensilsCrossed className="h-4 w-4" />
                Menu
              </Link>
              <Link
                href="/owner/settings"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/40">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm text-muted-foreground">Theme</span>
                  <ThemeToggle />
                </div>
                <Button variant="ghost" size="sm" asChild className="w-full">
                  <Link href="/">Switch Role</Link>
                </Button>
                <Button size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  My Café
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
