import { Link } from "react-router-dom";
import { Home, Users, Video, Moon, Sun } from "lucide-react";
import Button from "./Button";
// import { useTheme } from "next-themes";
function Navbar() {
  //   const { theme, setTheme } = useTheme();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className="fixed w-full top-0 z-50 bg-primary dark:bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src="https://drive.google.com/file/d/1G0rLnZXLdKGniQ-ppfLqOo-MWoSp8oA4/view?usp=sharing"
                alt="Vanguard Logo"
                className="h-8 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:scale-105 transition-all"
              >
                <Home size={18} />
                Home
              </a>
              <a
                href="#portal"
                onClick={(e) => handleScroll(e, "portal")}
                className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium hover:scale-105 transition-all"
              >
                Shared Portal
              </a>
              <a
                href="#team"
                onClick={(e) => handleScroll(e, "team")}
                className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:scale-105 transition-all"
              >
                <Users size={18} />
                Our Team
              </a>
              <a
                href="#activities"
                onClick={(e) => handleScroll(e, "activities")}
                className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium hover:scale-105 transition-all"
              >
                Activities
              </a>
              <Link
                to="/commercial"
                className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:scale-105 transition-all"
              >
                <Video size={18} />
                Commercial
              </Link>
            </div>
          </div>

          {/* Dark Mode Toggle */}
          {/* <Button
            variant="ghost"
            size="icon"
            className="text-white hover:text-secondary/90 transition-colors duration-300"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
