import { useState } from 'react';
import { Header } from '@/components/Header';
import { RestaurantCard } from '@/components/RestaurantCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { restaurants } from '@/data/mockData';
import heroFood from '@/assets/hero-food.jpg';

const cuisineCategories = ['All', 'Italian', 'Japanese', 'American', 'Healthy', 'Mexican'];

const Index = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('All');

  const filteredRestaurants = selectedCuisine === 'All'
    ? restaurants
    : restaurants.filter(r => r.cuisine === selectedCuisine);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroFood}
            alt="Delicious food spread"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 max-w-2xl">
            Delicious food delivered to your door
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-xl">
            Order from the best local restaurants with easy delivery
          </p>
          
          <div className="flex max-w-2xl space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Enter your delivery address"
                className="pl-12 h-14 text-lg bg-background/95 backdrop-blur"
              />
            </div>
            <Button variant="hero" size="lg" className="h-14 px-8 text-lg">
              Find Food
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {cuisineCategories.map((cuisine) => (
            <Button
              key={cuisine}
              variant={selectedCuisine === cuisine ? 'default' : 'outline'}
              onClick={() => setSelectedCuisine(cuisine)}
              className="whitespace-nowrap"
            >
              {cuisine}
            </Button>
          ))}
        </div>
      </section>

      {/* Restaurants */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold mb-6">
          {selectedCuisine === 'All' ? 'All Restaurants' : `${selectedCuisine} Restaurants`}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
