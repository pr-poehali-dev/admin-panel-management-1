import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import StatsCards from "@/components/admin/StatsCards";
import BookingChart from "@/components/admin/BookingChart";
import PopularDishes from "@/components/admin/PopularDishes";
import RecentActivity from "@/components/admin/RecentActivity";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Панель управления
            </h1>
            <p className="text-gray-600 mt-1">
              Добро пожаловать в админ-панель ресторана
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="px-3 py-1">
              <Icon name="Clock" size={16} className="mr-2" />
              Последнее обновление: сейчас
            </Badge>
          </div>
        </div>

        {/* Stats Cards */}
        <StatsCards />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2 space-y-6">
            <BookingChart />

            {/* Popular Dishes */}
            <PopularDishes />
          </div>

          {/* Right Column - Activity & Quick Actions */}
          <div className="space-y-6">
            <RecentActivity />

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Zap" size={20} />
                  Быстрые действия
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Icon name="Plus" size={16} className="text-blue-600" />
                  <span>Добавить блюдо</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Icon name="Calendar" size={16} className="text-green-600" />
                  <span>Новое бронирование</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Icon name="Users" size={16} className="text-purple-600" />
                  <span>Добавить пользователя</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
                  <Icon name="FileText" size={16} className="text-orange-600" />
                  <span>Создать статью</span>
                </button>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Activity" size={20} />
                  Состояние системы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Загрузка сервера</span>
                    <span>23%</span>
                  </div>
                  <Progress value={23} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Использование памяти</span>
                    <span>67%</span>
                  </div>
                  <Progress value={67} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Свободное место</span>
                    <span>81%</span>
                  </div>
                  <Progress value={81} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
