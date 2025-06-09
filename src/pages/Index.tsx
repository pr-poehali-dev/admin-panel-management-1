import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="Settings" size={32} className="text-purple-600" />
          </div>
          <CardTitle className="text-2xl">Админ-панель ресторана</CardTitle>
          <CardDescription>
            Управление бронированиями, меню и пользователями
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={() => navigate("/admin")}
            className="w-full"
            size="lg"
          >
            <Icon name="ChevronRight" size={20} className="mr-2" />
            Войти в панель управления
          </Button>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 pt-4">
            <div className="flex items-center gap-2">
              <Icon name="Users" size={16} />
              <span>Пользователи</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Calendar" size={16} />
              <span>Бронирования</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="UtensilsCrossed" size={16} />
              <span>Меню</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="BarChart3" size={16} />
              <span>Аналитика</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
