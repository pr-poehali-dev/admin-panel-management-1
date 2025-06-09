import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatsCards = () => {
  const stats = [
    {
      title: "Всего бронирований",
      value: "2,847",
      change: "+12%",
      changeType: "positive",
      icon: "Calendar",
      color: "text-blue-600 bg-blue-100",
    },
    {
      title: "Активные пользователи",
      value: "1,425",
      change: "+8%",
      changeType: "positive",
      icon: "Users",
      color: "text-green-600 bg-green-100",
    },
    {
      title: "Блюд в меню",
      value: "156",
      change: "+3",
      changeType: "positive",
      icon: "UtensilsCrossed",
      color: "text-purple-600 bg-purple-100",
    },
    {
      title: "Доход за месяц",
      value: "₽847,329",
      change: "+18%",
      changeType: "positive",
      icon: "TrendingUp",
      color: "text-orange-600 bg-orange-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
                <div className="flex items-center mt-2">
                  <span
                    className={`text-sm font-medium ${
                      stat.changeType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 ml-1">за неделю</span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <Icon name={stat.icon as any} size={24} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsCards;
