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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const BookingManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const bookings = [
    {
      id: 1,
      customerName: "Анна Петрова",
      phone: "+7 (901) 234-56-78",
      date: "2024-06-10",
      time: "19:00",
      guests: 4,
      status: "new",
      table: "Стол 5",
      notes: "Детский стульчик",
    },
    {
      id: 2,
      customerName: "Игорь Сидоров",
      phone: "+7 (902) 345-67-89",
      date: "2024-06-10",
      time: "20:30",
      guests: 2,
      status: "confirmed",
      table: "Стол 12",
      notes: "Годовщина свадьбы",
    },
    {
      id: 3,
      customerName: "Мария Иванова",
      phone: "+7 (903) 456-78-90",
      date: "2024-06-11",
      time: "18:00",
      guests: 6,
      status: "cancelled",
      table: "Стол 8",
      notes: "Отменено клиентом",
    },
  ];

  const getStatusText = (status: string) => {
    switch (status) {
      case "new":
        return "Новая";
      case "confirmed":
        return "Подтверждена";
      case "cancelled":
        return "Отменена";
      default:
        return status;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-yellow-100 text-yellow-800";
      case "confirmed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.phone.includes(searchTerm);
    const matchesStatus =
      statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: bookings.length,
    new: bookings.filter((b) => b.status === "new").length,
    confirmed: bookings.filter((b) => b.status === "confirmed").length,
    cancelled: bookings.filter((b) => b.status === "cancelled").length,
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Управление бронированиями
            </h1>
            <p className="text-gray-600 mt-1">
              Всего бронирований: {stats.total}
            </p>
          </div>
          <Button>
            <Icon name="Plus" size={16} className="mr-2" />
            Новое бронирование
          </Button>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Новые</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {stats.new}
                  </p>
                </div>
                <Icon name="Clock" size={24} className="text-yellow-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Подтверждены</p>
                  <p className="text-2xl font-bold text-green-600">
                    {stats.confirmed}
                  </p>
                </div>
                <Icon name="CheckCircle" size={24} className="text-green-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Отменены</p>
                  <p className="text-2xl font-bold text-red-600">
                    {stats.cancelled}
                  </p>
                </div>
                <Icon name="XCircle" size={24} className="text-red-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Всего</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stats.total}
                  </p>
                </div>
                <Icon name="Calendar" size={24} className="text-gray-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Список бронирований</CardTitle>
            <CardDescription>
              Управление заявками на бронирование столов
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <Input
                  placeholder="Поиск по имени или телефону..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-md"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Фильтр по статусу" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все статусы</SelectItem>
                  <SelectItem value="new">Новые</SelectItem>
                  <SelectItem value="confirmed">Подтверждены</SelectItem>
                  <SelectItem value="cancelled">Отменены</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {filteredBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon
                        name="Calendar"
                        size={20}
                        className="text-blue-600"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {booking.customerName}
                      </h3>
                      <p className="text-sm text-gray-600">{booking.phone}</p>
                      <p className="text-sm text-gray-500">
                        {booking.date} в {booking.time} • {booking.guests}{" "}
                        гостей • {booking.table}
                      </p>
                      {booking.notes && (
                        <p className="text-xs text-gray-500 mt-1">
                          {booking.notes}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge className={getStatusColor(booking.status)}>
                      {getStatusText(booking.status)}
                    </Badge>
                    <div className="flex space-x-2">
                      {booking.status === "new" && (
                        <>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-green-600"
                          >
                            <Icon name="Check" size={16} className="mr-1" />
                            Подтвердить
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-red-600"
                          >
                            <Icon name="X" size={16} className="mr-1" />
                            Отменить
                          </Button>
                        </>
                      )}
                      <Button variant="outline" size="sm">
                        <Icon name="Edit" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default BookingManagement;
