import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const PopularDishes = () => {
  const dishes = [
    {
      name: "Стeak Рибай",
      category: "Горячие блюда",
      orders: 89,
      revenue: 156780,
      trend: "up",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=100&h=100&fit=crop",
    },
    {
      name: "Паста Карбонара",
      category: "Паста",
      orders: 67,
      revenue: 98450,
      trend: "up",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=100&h=100&fit=crop",
    },
    {
      name: "Цезарь с курицей",
      category: "Салаты",
      orders: 54,
      revenue: 64800,
      trend: "down",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=100&h=100&fit=crop",
    },
    {
      name: "Том Ям",
      category: "Супы",
      orders: 43,
      revenue: 51600,
      trend: "up",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=100&h=100&fit=crop",
    },
    {
      name: "Тирамису",
      category: "Десерты",
      orders: 38,
      revenue: 30400,
      trend: "up",
      image:
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=100&h=100&fit=crop",
    },
  ];

  const maxOrders = Math.max(...dishes.map((d) => d.orders));

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="TrendingUp" size={20} />
          Популярные блюда
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {dishes.map((dish, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-medium text-gray-900 truncate">
                    {dish.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <Icon
                      name={dish.trend === "up" ? "TrendingUp" : "TrendingDown"}
                      size={16}
                      className={
                        dish.trend === "up" ? "text-green-500" : "text-red-500"
                      }
                    />
                    <span className="text-sm font-medium text-gray-900">
                      {dish.orders} заказов
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {dish.category}
                  </Badge>
                  <span className="text-sm text-gray-600">
                    ₽{dish.revenue.toLocaleString()}
                  </span>
                </div>
                <Progress
                  value={(dish.orders / maxOrders) * 100}
                  className="h-2"
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularDishes;
