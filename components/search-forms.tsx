"use client";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchFormProps {
  category: string;
}

export function SearchForm({ category }: SearchFormProps) {
  const renderFlightForm = () => (
    <div className="space-y-3">
      <RadioGroup defaultValue="roundtrip" className="flex flex-wrap gap-3">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="roundtrip" id="roundtrip" />
          <Label htmlFor="roundtrip" className="text-sm text-foreground">Round Trip</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="oneway" id="oneway" />
          <Label htmlFor="oneway" className="text-sm text-foreground">One Way</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="multicity" id="multicity" />
          <Label htmlFor="multicity" className="text-sm text-foreground">Multi-City</Label>
        </div>
      </RadioGroup>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Input type="text" placeholder="From" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Input type="text" placeholder="To" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Input type="date" placeholder="Departure" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Input type="date" placeholder="Return" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Select defaultValue="economy">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="economy">Economy</SelectItem>
            <SelectItem value="premium">Premium Economy</SelectItem>
            <SelectItem value="business">Business</SelectItem>
            <SelectItem value="first">First Class</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="1">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Adults" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num} Adult{num > 1 ? 's' : ''}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="0">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Children" />
          </SelectTrigger>
          <SelectContent>
            {[0, 1, 2, 3, 4].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num} Child{num !== 1 ? 'ren' : ''}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="0">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Infants" />
          </SelectTrigger>
          <SelectContent>
            {[0, 1, 2].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num} Infant{num !== 1 ? 's' : ''}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderHotelForm = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Input type="text" placeholder="Destination or Hotel Name" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Input type="date" placeholder="Check-in" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Input type="date" placeholder="Check-out" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Select defaultValue="2">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Rooms" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num} Room{num > 1 ? 's' : ''}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Select defaultValue="2">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Adults" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num} Adult{num > 1 ? 's' : ''}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="0">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Children" />
          </SelectTrigger>
          <SelectContent>
            {[0, 1, 2, 3].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num} Child{num !== 1 ? 'ren' : ''}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Star Rating" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Rating</SelectItem>
            <SelectItem value="5">5 Star</SelectItem>
            <SelectItem value="4">4+ Star</SelectItem>
            <SelectItem value="3">3+ Star</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="price">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price">Price</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
            <SelectItem value="popularity">Popularity</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderPackageForm = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <Input type="text" placeholder="Destination" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Package Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Type</SelectItem>
            <SelectItem value="adventure">Adventure</SelectItem>
            <SelectItem value="beach">Beach Holiday</SelectItem>
            <SelectItem value="city">City Break</SelectItem>
            <SelectItem value="cruise">Cruise</SelectItem>
            <SelectItem value="cultural">Cultural Tour</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Duration</SelectItem>
            <SelectItem value="weekend">Weekend Break</SelectItem>
            <SelectItem value="week">1 Week</SelectItem>
            <SelectItem value="fortnight">2 Weeks</SelectItem>
            <SelectItem value="longer">Longer</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Select defaultValue="2">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Travelers" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num} Traveler{num > 1 ? 's' : ''}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Budget" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Budget</SelectItem>
            <SelectItem value="budget">Budget</SelectItem>
            <SelectItem value="mid">Mid-Range</SelectItem>
            <SelectItem value="luxury">Luxury</SelectItem>
          </SelectContent>
        </Select>
        <Input type="date" placeholder="Preferred Date" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
      </div>
    </div>
  );

  const renderTrainForm = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Input type="text" placeholder="From Station" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Input type="text" placeholder="To Station" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Input type="date" placeholder="Date" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Select defaultValue="all">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Class" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Classes</SelectItem>
            <SelectItem value="first">First Class</SelectItem>
            <SelectItem value="second">Second Class</SelectItem>
            <SelectItem value="sleeper">Sleeper</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Select defaultValue="1">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Adults" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num} Adult{num > 1 ? 's' : ''}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="0">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Children" />
          </SelectTrigger>
          <SelectContent>
            {[0, 1, 2, 3].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num} Child{num !== 1 ? 'ren' : ''}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="general">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Quota" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="ladies">Ladies</SelectItem>
            <SelectItem value="senior">Senior Citizen</SelectItem>
            <SelectItem value="tatkal">Tatkal</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="no">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Flexible Dates" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="no">Exact Date</SelectItem>
            <SelectItem value="yes">±3 Days</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderBusForm = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Input type="text" placeholder="From City" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Input type="text" placeholder="To City" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Input type="date" placeholder="Date" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Bus Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Type</SelectItem>
            <SelectItem value="ac">AC</SelectItem>
            <SelectItem value="nonac">Non AC</SelectItem>
            <SelectItem value="sleeper">Sleeper</SelectItem>
            <SelectItem value="luxury">Luxury</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Select defaultValue="1">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Seats" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num} Seat{num > 1 ? 's' : ''}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Departure Time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Time</SelectItem>
            <SelectItem value="morning">Morning</SelectItem>
            <SelectItem value="afternoon">Afternoon</SelectItem>
            <SelectItem value="evening">Evening</SelectItem>
            <SelectItem value="night">Night</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="window">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Seat Preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">No Preference</SelectItem>
            <SelectItem value="window">Window</SelectItem>
            <SelectItem value="aisle">Aisle</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="no">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Show Only Direct" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="no">Show All</SelectItem>
            <SelectItem value="yes">Direct Only</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderCabForm = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <Input type="text" placeholder="Pickup Location" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Input type="text" placeholder="Drop Location" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Input type="datetime-local" placeholder="Pickup Time" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Car Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Type</SelectItem>
            <SelectItem value="mini">Mini</SelectItem>
            <SelectItem value="sedan">Sedan</SelectItem>
            <SelectItem value="suv">SUV</SelectItem>
            <SelectItem value="luxury">Luxury</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Select defaultValue="1">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Passengers" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <SelectItem key={num} value={num.toString()}>{num} Passenger{num > 1 ? 's' : ''}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select defaultValue="no">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Round Trip" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="no">One Way</SelectItem>
            <SelectItem value="yes">Round Trip</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="AC Preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="ac">AC Only</SelectItem>
            <SelectItem value="nonac">Non-AC</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Recommended</SelectItem>
            <SelectItem value="price_low">Price: Low to High</SelectItem>
            <SelectItem value="price_high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderDestinationForm = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <Input type="text" placeholder="Search Destinations" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Destination Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Type</SelectItem>
            <SelectItem value="beach">Beach</SelectItem>
            <SelectItem value="mountain">Mountain</SelectItem>
            <SelectItem value="city">City</SelectItem>
            <SelectItem value="countryside">Countryside</SelectItem>
            <SelectItem value="historic">Historic</SelectItem>
            <SelectItem value="wildlife">Wildlife</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Best Time to Visit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Time</SelectItem>
            <SelectItem value="spring">Spring</SelectItem>
            <SelectItem value="summer">Summer</SelectItem>
            <SelectItem value="autumn">Autumn</SelectItem>
            <SelectItem value="winter">Winter</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Budget Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Budget</SelectItem>
            <SelectItem value="budget">Budget</SelectItem>
            <SelectItem value="mid">Mid-Range</SelectItem>
            <SelectItem value="luxury">Luxury</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Duration</SelectItem>
            <SelectItem value="weekend">Weekend</SelectItem>
            <SelectItem value="short">2-3 Days</SelectItem>
            <SelectItem value="week">Week</SelectItem>
            <SelectItem value="long">More than a Week</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="any">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Activities" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any Activities</SelectItem>
            <SelectItem value="adventure">Adventure</SelectItem>
            <SelectItem value="culture">Cultural</SelectItem>
            <SelectItem value="nature">Nature</SelectItem>
            <SelectItem value="relaxation">Relaxation</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderInsuranceForm = () => (
    <div className="space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <Select defaultValue="travel">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Insurance Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="travel">Travel Insurance</SelectItem>
            <SelectItem value="medical">Medical Insurance</SelectItem>
            <SelectItem value="comprehensive">Comprehensive Coverage</SelectItem>
          </SelectContent>
        </Select>
        <Input type="number" placeholder="Number of Travelers" min="1" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Select defaultValue="worldwide">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Coverage Area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="worldwide">Worldwide</SelectItem>
            <SelectItem value="domestic">Domestic Only</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="americas">Americas</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Input type="date" placeholder="Start Date" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Input type="date" placeholder="End Date" className="h-9 text-foreground placeholder:text-muted-foreground bg-background" />
        <Select defaultValue="single">
          <SelectTrigger className="h-9 text-foreground bg-background">
            <SelectValue placeholder="Trip Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="single">Single Trip</SelectItem>
            <SelectItem value="annual">Annual Multi-Trip</SelectItem>
            <SelectItem value="longstay">Long Stay</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const formMap: { [key: string]: () => JSX.Element } = {
    flights: renderFlightForm,
    hotels: renderHotelForm,
    packages: renderPackageForm,
    trains: renderTrainForm,
    buses: renderBusForm,
    cabs: renderCabForm,
    destinations: renderDestinationForm,
    insurance: renderInsuranceForm,
  };

  return (
    <div className={cn(
      "rounded-lg p-3",
      "bg-white/90 dark:bg-black/90",
      "backdrop-blur-md",
      "border border-border/50"
    )}>
      {formMap[category]?.()}
      <div className="mt-3">
        <Button size="sm" className="w-full">
          <Search className="mr-2 h-4 w-4" />
          Search
        </Button>
      </div>
    </div>
  );
}