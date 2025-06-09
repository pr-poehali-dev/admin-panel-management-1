import { Link, useLocation } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      title: "Панель управления",
      href: "/admin",
      icon: "LayoutDashboard",
    },
    {
      title: "Пользователи",
      href: "/admin/users",
      icon: "Users",
    },
    {
      title: "Бронирования",
      href: "/admin/bookings",
      icon: "Calendar",
    },
    {
      title: "Меню",
      href: "/admin/menu",
      icon: "UtensilsCrossed",
    },
    {
      title: "Категории",
      href: "/admin/categories",
      icon: "FolderTree",
    },
    {
      title: "Блог",
      href: "/admin/blog",
      icon: "FileText",
    },
    {
      title: "Настройки",
      href: "/admin/settings",
      icon: "Settings",
    },
  ];

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-900">Админ-панель</h2>
        <p className="text-sm text-gray-600 mt-1">Управление рестораном</p>
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
              location.pathname === item.href
                ? "bg-purple-100 text-purple-700"
                : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
            )}
          >
            <Icon name={item.icon as any} size={18} />
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default AdminSidebar;
