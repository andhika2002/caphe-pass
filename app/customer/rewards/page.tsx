"use client"

import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Gift, Trophy, Zap, Coffee, Star, Crown, Award, Wifi, Calendar, Percent } from "lucide-react"
import Link from "next/link"

const userStats = {
  points: 2450,
  level: "Gold",
  nextLevel: "Platinum",
  pointsToNextLevel: 550,
  totalVisits: 47,
  favoritesCafe: "The Coffee House",
  memberSince: "January 2024",
}

const achievements = [
  {
    id: 1,
    name: "First Visit",
    description: "Complete your first café check-in",
    icon: Coffee,
    completed: true,
    points: 50,
  },
  {
    id: 2,
    name: "Social Butterfly",
    description: "Visit 10 different cafés",
    icon: Star,
    completed: true,
    points: 200,
  },
  {
    id: 3,
    name: "Regular",
    description: "Visit the same café 20 times",
    icon: Trophy,
    completed: true,
    points: 300,
  },
  {
    id: 4,
    name: "Early Bird",
    description: "Check in before 8 AM 5 times",
    icon: Zap,
    completed: false,
    progress: 3,
    total: 5,
    points: 150,
  },
  {
    id: 5,
    name: "Reviewer",
    description: "Write 10 café reviews",
    icon: Award,
    completed: false,
    progress: 6,
    total: 10,
    points: 250,
  },
]

const rewards = [
  {
    id: 1,
    name: "Free Coffee",
    description: "Redeem for any regular coffee",
    points: 500,
    icon: Coffee,
    available: true,
  },
  {
    id: 2,
    name: "20% Off",
    description: "20% discount on your next order",
    points: 300,
    icon: Percent,
    available: true,
  },
  {
    id: 3,
    name: "Premium Wi-Fi",
    description: "1 month of premium Wi-Fi access",
    points: 800,
    icon: Wifi,
    available: true,
  },
  {
    id: 4,
    name: "Priority Booking",
    description: "Skip the queue for 1 month",
    points: 1000,
    icon: Calendar,
    available: true,
  },
  {
    id: 5,
    name: "VIP Event Access",
    description: "Exclusive café events and tastings",
    points: 1500,
    icon: Crown,
    available: true,
  },
]

const recentActivity = [
  { date: "Today", action: "Checked in at The Coffee House", points: 50 },
  { date: "Yesterday", action: "Pre-ordered 2 items", points: 100 },
  { date: "2 days ago", action: "Wrote a review", points: 75 },
  { date: "3 days ago", action: "Completed booking", points: 50 },
]

export default function RewardsPage() {
  const progressPercentage = (userStats.points / (userStats.points + userStats.pointsToNextLevel)) * 100

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="border-b border-border/40 bg-gradient-to-br from-card to-accent/5">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="h-8 w-8 text-accent" />
              <Badge className="bg-accent text-accent-foreground">{userStats.level} Member</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Your Rewards</h1>
            <p className="text-muted-foreground mb-6">
              Member since {userStats.memberSince} • {userStats.totalVisits} visits
            </p>

            {/* Points Card */}
            <Card className="p-6 bg-card border-border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-4xl font-bold text-accent mb-1">{userStats.points.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </div>
                <Gift className="h-12 w-12 text-accent" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Progress to {userStats.nextLevel}</span>
                  <span className="font-semibold text-foreground">{userStats.pointsToNextLevel} points to go</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Available Rewards */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Redeem Rewards</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {rewards.map((reward) => {
                  const Icon = reward.icon
                  const canAfford = userStats.points >= reward.points
                  return (
                    <Card
                      key={reward.id}
                      className={`p-5 bg-card border-border ${canAfford ? "hover:border-accent/50" : "opacity-60"} transition-all`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <Icon className="h-8 w-8 text-accent" />
                        <Badge variant={canAfford ? "default" : "secondary"} className="text-xs">
                          {reward.points} pts
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-card-foreground mb-1">{reward.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{reward.description}</p>
                      <Button
                        size="sm"
                        className="w-full"
                        disabled={!canAfford}
                        variant={canAfford ? "default" : "outline"}
                      >
                        {canAfford ? "Redeem" : "Not Enough Points"}
                      </Button>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Achievements</h2>
              <div className="space-y-3">
                {achievements.map((achievement) => {
                  const Icon = achievement.icon
                  return (
                    <Card
                      key={achievement.id}
                      className={`p-5 bg-card border-border ${achievement.completed ? "border-accent/30" : ""}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${achievement.completed ? "bg-accent/10" : "bg-muted"}`}>
                          <Icon
                            className={`h-6 w-6 ${achievement.completed ? "text-accent" : "text-muted-foreground"}`}
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-1">
                            <h3 className="font-semibold text-card-foreground">{achievement.name}</h3>
                            <Badge variant={achievement.completed ? "default" : "secondary"} className="text-xs">
                              +{achievement.points} pts
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                          {!achievement.completed && achievement.progress !== undefined && (
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs text-muted-foreground">
                                <span>
                                  {achievement.progress} / {achievement.total}
                                </span>
                                <span>{Math.round((achievement.progress / achievement.total) * 100)}%</span>
                              </div>
                              <Progress value={(achievement.progress / achievement.total) * 100} className="h-1.5" />
                            </div>
                          )}
                          {achievement.completed && (
                            <Badge variant="outline" className="text-green-500 border-green-500 text-xs">
                              Completed
                            </Badge>
                          )}
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold text-card-foreground mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="text-sm text-card-foreground mb-1">{activity.action}</div>
                      <div className="text-xs text-muted-foreground">{activity.date}</div>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      +{activity.points}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* How to Earn Points */}
            <Card className="p-6 bg-card border-border">
              <h3 className="font-semibold text-card-foreground mb-4">Earn More Points</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Check-in</span>
                  <span className="font-semibold text-accent">+50 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Complete booking</span>
                  <span className="font-semibold text-accent">+50 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Pre-order</span>
                  <span className="font-semibold text-accent">+100 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Write review</span>
                  <span className="font-semibold text-accent">+75 pts</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Refer a friend</span>
                  <span className="font-semibold text-accent">+200 pts</span>
                </div>
              </div>
            </Card>

            {/* CTA */}
            <Card className="p-6 bg-accent/5 border-accent/20">
              <Zap className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Start Earning Today</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Book a table or pre-order to start earning points and unlock exclusive rewards.
              </p>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/booking">Book Now</Link>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
