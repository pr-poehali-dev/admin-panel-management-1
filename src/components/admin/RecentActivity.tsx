import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const RecentActivity = () => {
  const activities = [
    {
      type: "booking",
      title: "Новое бронирование",
      description: "Стол на 4 человека на 19:00",
      user: "Анна Петрова",
      time: "2 мин назад",
      status: "new",
    },
    {
      type: "menu",
      title: "Обновлено блюдо",
      description: "Изменена цена Стейка Рибай",
      user: "admin",
      time: "15 мин назад",
      status: "updated",
    },
    {
      type: "user",
      title: "Новый пользователь",
      description: "Зарегистрирован менеджер",
      user: "Игорь Сидоров",
      time: "1 час назад",
      status: "created",
    },
    {
      type: "booking",
      title: "Отменено бронирование",
      description: "Стол на 6 человек на завтра",
      user: "Мария Иванова",
      time: "2 часа назад",
      status: "cancelled",
    },
    {
      type: "article",
      title: "Опубликована статья",
      description: "Новые летние блюда в меню",
      user: "admin",
      time: "5 часов назад",
      status: "published",
    },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "booking":
        return "Calendar";
      case "menu":
        return "UtensilsCrossed";
      case "user":
        return "User";
      case "article":
        return "FileText";
      default:
        return "Bell";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "updated":
        return "bg-yellow-100 text-yellow-800";
      case "created":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "published":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "new":
        return "Новое";
      case "updated":
        return "Обновлено";
      case "created":
        return "Создано";
      case "cancelled":
        return "Отменено";
      case "published":
        return "Опубликовано";
      default:
        return "Неизвестно";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="Activity" size={20} />
          Последняя активность
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Icon
                  name={getActivityIcon(activity.type) as any}
                  size={16}
                  className="text-purple-600"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-sm font-medium text-gray-900">
                  {activity.title}
                </h4>
                <Badge
                  variant="outline"
                  className={`text-xs ${getStatusColor(activity.status)}`}
                >
                  {getStatusText(activity.status)}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-1">
                {activity.description}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{activity.user}</span>
                <span>{activity.time}</span>
              </div>
            </div>
          </div>
        ))}

        <button className="w-full text-center text-sm text-purple-600 hover:text-purple-800 py-2 border-t border-gray-200 mt-4">
          Показать всю активность
        </button>
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
