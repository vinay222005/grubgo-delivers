import { Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MenuItem } from '@/types';

interface MenuItemCardProps {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}

export const MenuItemCard = ({ item, onAdd }: MenuItemCardProps) => {
  return (
    <Card className="overflow-hidden transition-smooth hover:shadow-md">
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold">{item.name}</h3>
              {item.popular && (
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                  Popular
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
              {item.description}
            </p>
            <p className="text-lg font-bold">${item.price.toFixed(2)}</p>
          </div>
          
          <Button
            size="icon"
            className="ml-4 shrink-0"
            onClick={() => onAdd(item)}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
