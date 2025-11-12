"use client"

import type React from "react"

import { OwnerNavbar } from "@/components/owner-navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MapPin, Clock, Wifi, Phone, Mail, Globe, Save } from "lucide-react"
import { useState } from "react"

interface CafeSettings {
  name: string
  address: string
  phone: string
  email: string
  website: string
  openTime: string
  closeTime: string
  maxCapacity: number
  wifiPassword: string
  description: string
}

const initialSettings: CafeSettings = {
  name: "The Coffee House",
  address: "123 Nguyen Hue, District 1, Ho Chi Minh City",
  phone: "+84 28 1234 5678",
  email: "hello@thecoffeehouse.vn",
  website: "www.thecoffeehouse.vn",
  openTime: "07:00",
  closeTime: "22:00",
  maxCapacity: 80,
  wifiPassword: "CoffeeHouse2024",
  description: "Premium café with comfortable seating and great ambiance",
}

export default function SettingsPage() {
  const [settings, setSettings] = useState(initialSettings)
  const [saved, setSaved] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
    setSaved(false)
  }

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="min-h-screen bg-background">
      <OwnerNavbar />

      {/* Header */}
      <section className="border-b border-border/40 bg-card">
        <div className="container mx-auto px-4 py-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">Café Settings</h1>
            <p className="text-muted-foreground">Manage your café information and preferences</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Notification */}
          {saved && (
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-sm font-medium text-green-500">Settings saved successfully!</p>
            </div>
          )}

          {/* Basic Information */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold text-card-foreground mb-6">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Café Name</label>
                <Input
                  name="name"
                  value={settings.name}
                  onChange={handleInputChange}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Description</label>
                <textarea
                  name="description"
                  value={settings.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground"
                  rows={4}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Address
                </label>
                <Input
                  name="address"
                  value={settings.address}
                  onChange={handleInputChange}
                  className="bg-background border-border"
                />
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold text-card-foreground mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Phone Number
                </label>
                <Input
                  name="phone"
                  value={settings.phone}
                  onChange={handleInputChange}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </label>
                <Input
                  name="email"
                  value={settings.email}
                  onChange={handleInputChange}
                  className="bg-background border-border"
                  type="email"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Website
                </label>
                <Input
                  name="website"
                  value={settings.website}
                  onChange={handleInputChange}
                  className="bg-background border-border"
                />
              </div>
            </div>
          </Card>

          {/* Operating Hours */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold text-card-foreground mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Operating Hours
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Opening Time</label>
                <Input
                  name="openTime"
                  type="time"
                  value={settings.openTime}
                  onChange={handleInputChange}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Closing Time</label>
                <Input
                  name="closeTime"
                  type="time"
                  value={settings.closeTime}
                  onChange={handleInputChange}
                  className="bg-background border-border"
                />
              </div>
            </div>
          </Card>

          {/* Capacity & Facilities */}
          <Card className="p-6 bg-card border-border">
            <h2 className="text-xl font-bold text-card-foreground mb-6">Capacity & Facilities</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Max Capacity</label>
                <Input
                  name="maxCapacity"
                  type="number"
                  value={settings.maxCapacity}
                  onChange={handleInputChange}
                  className="bg-background border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                  <Wifi className="h-4 w-4" />
                  Wi-Fi Password
                </label>
                <Input
                  name="wifiPassword"
                  value={settings.wifiPassword}
                  onChange={handleInputChange}
                  className="bg-background border-border"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  This will be displayed to customers on the booking platform
                </p>
              </div>
            </div>
          </Card>

          {/* Save Button */}
          <Button
            onClick={handleSave}
            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-base"
          >
            <Save className="h-5 w-5 mr-2" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  )
}
