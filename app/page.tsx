"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaneTakeoff, Hotel, Map, Package, Train, Bus, Car, Shield } from "lucide-react";
import Link from "next/link";
import { SearchForm } from "@/components/search-forms";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("flights");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-[600px] sm:h-[700px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2021&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6">Are you coming?</h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl">
            Plan your perfect trip with our comprehensive travel platform. Book flights,
            hotels, and discover amazing travel packages from trusted agents.
          </p>
          <div className="w-full max-w-4xl">
            <Tabs defaultValue="flights" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-4 lg:grid-cols-8 mb-4 bg-white/10 backdrop-blur-md">
                <TabsTrigger value="flights" className="flex items-center gap-2 text-xs sm:text-sm">
                  <PlaneTakeoff className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Flights</span>
                </TabsTrigger>
                <TabsTrigger value="hotels" className="flex items-center gap-2 text-xs sm:text-sm">
                  <Hotel className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Hotels</span>
                </TabsTrigger>
                <TabsTrigger value="packages" className="flex items-center gap-2 text-xs sm:text-sm">
                  <Package className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Packages</span>
                </TabsTrigger>
                <TabsTrigger value="trains" className="flex items-center gap-2 text-xs sm:text-sm">
                  <Train className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Trains</span>
                </TabsTrigger>
                <TabsTrigger value="buses" className="flex items-center gap-2 text-xs sm:text-sm">
                  <Bus className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Buses</span>
                </TabsTrigger>
                <TabsTrigger value="cabs" className="flex items-center gap-2 text-xs sm:text-sm">
                  <Car className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Cabs</span>
                </TabsTrigger>
                <TabsTrigger value="destinations" className="flex items-center gap-2 text-xs sm:text-sm">
                  <Map className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Destinations</span>
                </TabsTrigger>
                <TabsTrigger value="insurance" className="flex items-center gap-2 text-xs sm:text-sm">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Insurance</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="flights">
                <SearchForm category="flights" />
              </TabsContent>

              <TabsContent value="hotels">
                <SearchForm category="hotels" />
              </TabsContent>

              <TabsContent value="packages">
                <SearchForm category="packages" />
              </TabsContent>

              <TabsContent value="trains">
                <SearchForm category="trains" />
              </TabsContent>

              <TabsContent value="buses">
                <SearchForm category="buses" />
              </TabsContent>

              <TabsContent value="cabs">
                <SearchForm category="cabs" />
              </TabsContent>

              <TabsContent value="destinations">
                <SearchForm category="destinations" />
              </TabsContent>

              <TabsContent value="insurance">
                <SearchForm category="insurance" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card className="p-4 sm:p-6">
            <PlaneTakeoff className="h-8 w-8 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Flight Booking</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Find and book the best flights at competitive prices.
            </p>
            <Link href="/flights">
              <Button className="w-full" size="sm">Search Flights</Button>
            </Link>
          </Card>

          <Card className="p-4 sm:p-6">
            <Hotel className="h-8 w-8 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Hotel Booking</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Book comfortable stays at hotels worldwide.
            </p>
            <Link href="/hotels">
              <Button className="w-full" size="sm">Find Hotels</Button>
            </Link>
          </Card>

          <Card className="p-4 sm:p-6">
            <Map className="h-8 w-8 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Trip Planner</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Plan your perfect trip with our interactive tools.
            </p>
            <Link href="/trip-planner">
              <Button className="w-full" size="sm">Start Planning</Button>
            </Link>
          </Card>

          <Card className="p-4 sm:p-6">
            <Package className="h-8 w-8 sm:h-12 sm:w-12 mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Travel Packages</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Explore curated travel packages from verified agents.
            </p>
            <Link href="/packages">
              <Button className="w-full" size="sm">View Packages</Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Agent Section */}
      <section className="bg-muted py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Are you a Travel Agent?</h2>
            <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8">
              Join our platform to showcase your travel packages and reach thousands
              of potential customers. Get started with our yearly subscription plans.
            </p>
            <Link href="/agent/register">
              <Button size="lg">Become an Agent</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}