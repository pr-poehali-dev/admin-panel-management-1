import { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

const MenuManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const menuItems = [
    {
      id: 1,
      name: "Стейк Рибай",
      description: "Сочный стейк из мраморной говядины с гарниром",
      price: 1790,
      weight: "350г",
      category: "Горячие блюда",
      image:
        "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200&h=150&fit=crop",
      isVegan: false,
      isSpicy: false,
      isPopular: true,
      available: true,
    },
    {
      id: 2,
      name: "Паста Карбонара",
      description:
        "Классическая итальянская паста с беконом и сливочным соусом",
      price: 890,
      weight: "280г",
      category: "Паста",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=200&h=150&fit=crop",
      isVegan: false,
      isSpicy: false,
      isPopular: true,
      available: true,
    },
    {
      id: 3,
      name: "Овощной салат",
      description: "Свежие овощи с оливковым маслом и травами",
      price: 650,
      weight: "200г",
      category: "Салаты",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&h=150&fit=crop",
      isVegan: true,
      isSpicy: false,
      isPopular: false,
      available: false,
    },
  ];

  const categories = [
    "Все",
    "Горячие блюда",
    "Паста",
    "Салаты",
    "Супы",
    "Десерты",
  ];

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Управление меню
            </h1>
            <p className="text-gray-600 mt-1">Всего блюд: {menuItems.length}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Icon name="Download" size={16} className="mr-2" />
              Экспорт
            </Button>
            <Button variant="outline">
              <Icon name="Upload" size={16} className="mr-2" />
              Импорт
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Icon name="Plus" size={16} className="mr-2" />
                  Добавить блюдо
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Добавить блюдо</DialogTitle>
                  <DialogDescription>
                    Заполните информацию о новом блюде
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Название</Label>
                      <Input id="name" placeholder="Название блюда" />
                    </div>
                    <div>
                      <Label htmlFor="price">Цена (₽)</Label>
                      <Input id="price" type="number" placeholder="0" />
                    </div>
                    <div>
                      <Label htmlFor="weight">Вес/объем</Label>
                      <Input id="weight" placeholder="250г" />
                    </div>
                    <div>
                      <Label htmlFor="category">Категория</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.slice(1).map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="description">Описание</Label>
                      <Textarea
                        id="description"
                        placeholder="Описание блюда"
                        className="h-24"
                      />
                    </div>
                    <div>
                      <Label htmlFor="image">Фотография</Label>
                      <Input id="image" type="file" accept="image/*" />
                    </div>
                    <div className="space-y-3">
                      <Label>Дополнительные параметры</Label>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="vegan" />
                        <Label htmlFor="vegan">Веганское</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="spicy" />
                        <Label htmlFor="spicy">Острое</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="popular" />
                        <Label htmlFor="popular">Популярное</Label>
                      </div>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-4">Добавить блюдо</Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Список блюд</CardTitle>
            <CardDescription>Управление блюдами меню ресторана</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder="Поиск блюд..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-md"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Фильтр по категории" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  {categories.slice(1).map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />
                    {!item.available && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="text-white font-medium">
                          Недоступно
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <div className="text-right">
                        <p className="font-bold text-lg">₽{item.price}</p>
                        <p className="text-sm text-gray-500">{item.weight}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      <Badge variant="outline">{item.category}</Badge>
                      {item.isVegan && (
                        <Badge className="bg-green-100 text-green-800">
                          Веган
                        </Badge>
                      )}
                      {item.isSpicy && (
                        <Badge className="bg-red-100 text-red-800">
                          Острое
                        </Badge>
                      )}
                      {item.isPopular && (
                        <Badge className="bg-yellow-100 text-yellow-800">
                          Хит
                        </Badge>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Icon name="Edit" size={16} className="mr-1" />
                        Изменить
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="Trash2" size={16} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default MenuManagement;
