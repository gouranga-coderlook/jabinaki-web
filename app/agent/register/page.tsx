"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function AgentRegisterPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Become a Travel Agent</h1>
        <p className="text-muted-foreground mb-8">
          Join our platform to showcase your travel packages and reach thousands of potential customers.
        </p>

        <Card className="p-6">
          <form className="space-y-6">
            {/* Business Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Business Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input id="businessName" placeholder="Enter your business name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="businessType">Business Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="travel-agency">Travel Agency</SelectItem>
                      <SelectItem value="tour-operator">Tour Operator</SelectItem>
                      <SelectItem value="destination-management">Destination Management Company</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Business Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Tell us about your business and services"
                  className="h-24"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Contact Information</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Enter your full name" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website (Optional)</Label>
                  <Input id="website" type="url" placeholder="Enter your website URL" />
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Business Address</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="Enter street address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Enter city" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" placeholder="Enter country" />
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full">Submit Application</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}