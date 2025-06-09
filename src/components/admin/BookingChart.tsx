import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BookingChart = () => {
  const weeklyData = [
    { name: "Пн", bookings: 24, revenue: 45600 },
    { name: "Вт", bookings: 31, revenue: 58200 },
    { name: "Ср", bookings: 28, revenue: 52100 },
    { name: "Чт", bookings: 35, revenue: 67800 },
    { name: "Пт", bookings: 42, revenue: 89400 },
    { name: "Сб", bookings: 58, revenue: 124300 },
    { name: "Вс", bookings: 47, revenue: 98700 },
  ];

  const monthlyData = [
    { name: "Янв", bookings: 287, revenue: 547200 },
    { name: "Фев", bookings: 324, revenue: 612800 },
    { name: "Мар", bookings: 389, revenue: 724600 },
    { name: "Апр", bookings: 412, revenue: 789300 },
    { name: "Май", bookings: 445, revenue: 847900 },
    { name: "Июн", bookings: 398, revenue: 756400 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Аналитика бронирований</CardTitle>
        <CardDescription>
          Статистика бронирований и доходов за выбранный период
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly" className="space-y-4">
          <TabsList>
            <TabsTrigger value="weekly">За неделю</TabsTrigger>
            <TabsTrigger value="monthly">За месяц</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [
                      name === "bookings"
                        ? `${value} бронирований`
                        : `₽${value.toLocaleString()}`,
                      name === "bookings" ? "Бронирования" : "Доход",
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="bookings"
                    stroke="#9b87f5"
                    strokeWidth={3}
                    dot={{ fill: "#9b87f5", r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip
                    formatter={(value, name) => [
                      name === "bookings"
                        ? `${value} бронирований`
                        : `₽${value.toLocaleString()}`,
                      name === "bookings" ? "Бронирования" : "Доход",
                    ]}
                  />
                  <Bar
                    dataKey="bookings"
                    fill="#9b87f5"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BookingChart;
