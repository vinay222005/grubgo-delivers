import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { MenuItemCard } from '@/components/MenuItemCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Star, DollarSign, Info } from 'lucide-react';
import { restaurants, menuItems } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';
import { MenuItem } from '@/types';

const Restaurant = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  
  const restaurant = restaurants.find(r => r.id === id);
  const menu = menuItems[id || ''] || [];

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const categories = [...new Set(menu.map(item => item.category))];

  const handleAddItem = (item: MenuItem) => {
    addItem(item, restaurant.id, restaurant.name);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Restaurant Header */}
      <div className="relative h-80 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        
        <Link to="/" className="absolute top-4 left-4">
          <Button variant="secondary" size="icon">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        <div className="bg-background rounded-xl shadow-elegant p-6 mb-8">
          <h1 className="text-4xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-muted-foreground mb-4">{restaurant.description}</p>
          
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 fill-accent text-accent" />
              <span className="font-semibold">{restaurant.rating}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Clock className="h-5 w-5" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            
            <div className="flex items-center space-x-2 text-muted-foreground">
              <DollarSign className="h-5 w-5" />
              <span>${restaurant.deliveryFee.toFixed(2)} delivery fee</span>
            </div>
          </div>

          {restaurant.minimumOrder && (
            <div className="mt-4 flex items-center space-x-2 text-sm bg-muted px-3 py-2 rounded-lg inline-flex">
              <Info className="h-4 w-4" />
              <span>Minimum order: ${restaurant.minimumOrder}</span>
            </div>
          )}
        </div>

        {/* Menu */}
        <div className="pb-16">
          {categories.map(category => {
            const categoryItems = menu.filter(item => item.category === category);
            
            return (
              <div key={category} className="mb-12">
                <h2 className="text-2xl font-bold mb-4">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryItems.map(item => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      onAdd={handleAddItem}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
