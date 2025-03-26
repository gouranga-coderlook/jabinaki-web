"use client";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { PlaneTakeoff, Hotel, Map, Package, CalendarRange } from "lucide-react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <PlaneTakeoff className="h-5 w-5" />
          <span className="font-semibold text-lg">JabiNaki</span>
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-2 p-4 w-[400px] md:w-[500px] lg:w-[600px]">
                  <div className="grid grid-cols-2 gap-2">
                    <Link 
                      href="/flights" 
                      className={cn(
                        "flex items-center space-x-2 p-2 rounded-md",
                        "hover:bg-accent hover:text-accent-foreground",
                        "transition-colors"
                      )}
                    >
                      <PlaneTakeoff className="h-4 w-4" />
                      <span className="text-sm">Flights</span>
                    </Link>
                    <Link 
                      href="/hotels" 
                      className={cn(
                        "flex items-center space-x-2 p-2 rounded-md",
                        "hover:bg-accent hover:text-accent-foreground",
                        "transition-colors"
                      )}
                    >
                      <Hotel className="h-4 w-4" />
                      <span className="text-sm">Hotels</span>
                    </Link>
                    <Link 
                      href="/trip-planner" 
                      className={cn(
                        "flex items-center space-x-2 p-2 rounded-md",
                        "hover:bg-accent hover:text-accent-foreground",
                        "transition-colors"
                      )}
                    >
                      <Map className="h-4 w-4" />
                      <span className="text-sm">Trip Planner</span>
                    </Link>
                    <Link 
                      href="/packages" 
                      className={cn(
                        "flex items-center space-x-2 p-2 rounded-md",
                        "hover:bg-accent hover:text-accent-foreground",
                        "transition-colors"
                      )}
                    >
                      <Package className="h-4 w-4" />
                      <span className="text-sm">Travel Packages</span>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2">
          {isLoggedIn ? (
            <Link href="/my-plans">
              <Button variant="outline" size="sm" className="h-9">
                <CalendarRange className="h-4 w-4 mr-2" />
                My Plans
              </Button>
            </Link>
          ) : (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="h-9">
                  <CalendarRange className="h-4 w-4 mr-2" />
                  My Plans
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Sign in required</DialogTitle>
                  <DialogDescription>
                    Please sign in to view and manage your travel plans.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end space-x-2">
                  <Link href="/login">
                    <Button size="sm">Sign In</Button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          )}
          <Link href="/agent/register">
            <Button variant="outline" size="sm" className="h-9">
              Become an Agent
            </Button>
          </Link>
          <Link href="/login">
            <Button size="sm" className="h-9">
              Login
            </Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}