import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Activity,
  FileText,
  Image,
  MessageSquare,
} from "lucide-react";

function AdminSidebar() {
  const location = useLocation();

  // Navigation items
  const navItems = [
    { name: "Dashboard", icon: Home, path: "/admin" },
    { name: "Team Members", icon: Users, path: "/admin/team" },
    { name: "Activities", icon: Activity, path: "/admin/activities" },
    { name: "Blogs", icon: FileText, path: "/admin/blogs" },
    { name: "Logos", icon: Image, path: "/admin/logos" },
    { name: "Requests", icon: MessageSquare, path: "/admin/requests" },
  ];

  return (
    <aside className="w-64 border-r border-gray-200 dark:border-gray-700 h-100 flex flex-col bg-white dark:bg-gray-800">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center text-white font-bold shadow-lg">
            A
          </div>
          <h3 className="text-lg font-semibold dark:text-white">Admin Panel</h3>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-white"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
        <div className="flex items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Admin Dashboard v1.0
          </p>
        </div>
      </footer>
    </aside>
  );
}

export default AdminSidebar;
