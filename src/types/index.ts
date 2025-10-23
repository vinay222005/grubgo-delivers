export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  image: string;
  description: string;
  minimumOrder?: number;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  category: string;
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
  restaurantId: string;
  restaurantName: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  restaurantName: string;
  deliveryAddress: string;
  status: 'pending' | 'confirmed' | 'preparing' | 'on-the-way' | 'delivered';
  createdAt: Date;
}
