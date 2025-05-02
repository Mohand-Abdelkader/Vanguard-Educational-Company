import { Bell, Moon, Sun, User } from "lucide-react";
import { useState } from "react";

function AdminHeader() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  // Get the current page title based on the path

  return (
    <header className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center space-x-3">
        <h2 className="font-semibold text-lg dark:text-white">
          Admin Dashboard
        </h2>
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 relative">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button> */}

        <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center cursor-pointer">
          <User size={16} />
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;
