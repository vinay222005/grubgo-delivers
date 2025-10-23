import { Clock, Star, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Restaurant } from '@/types';
import { Link } from 'react-router-dom';

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card className="overflow-hidden transition-smooth hover:shadow-elegant cursor-pointer group">
        <div className="relative h-48 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="h-full w-full object-cover transition-smooth group-hover:scale-110"
          />
          <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center space-x-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-semibold">{restaurant.rating}</span>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-bold mb-1">{restaurant.name}</h3>
          <p className="text-sm text-muted-foreground mb-3">{restaurant.cuisine}</p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <DollarSign className="h-4 w-4" />
              <span>${restaurant.deliveryFee.toFixed(2)} delivery</span>
            </div>
          </div>
          
          {restaurant.minimumOrder && (
            <div className="mt-2 text-xs text-muted-foreground">
              Min. order: ${restaurant.minimumOrder}
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
};
