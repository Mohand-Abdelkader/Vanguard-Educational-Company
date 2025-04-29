import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Users,
  Video,
  Moon,
  Sun,
  Menu,
  X,
  Share2,
  Activity,
} from "lucide-react";
import logo from "../assets/logo.png";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle dark mode toggle
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

  // Check for saved theme preference or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 ${
        scrolled
          ? "bg-primary/95 dark:bg-accent/95 backdrop-blur-sm"
          : "bg-primary dark:bg-accent"
      } shadow-lg transition-all duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                src={logo}
                alt="Vanguard Logo"
                className="h-8 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <Link
                to="/"
                className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:scale-105 transition-all"
              >
                <a href="#home"></a>
                <Home size={18} />
                Home
              </Link>
              <a
                href="#portal"
                onClick={(e) => handleScroll(e, "portal")}
                className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:scale-105 transition-all"
              >
                <Share2 size={18} />
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
                className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:scale-105 transition-all"
              >
                <Activity size={18} />
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

          <div className="flex items-center gap-4">
            {/* Dark Mode Toggle */}
            <button
              className="text-white hover:text-green-100 p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white hover:text-green-100 p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-primary/95 dark:bg-accent/95 backdrop-blur-sm shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className="text-white hover:text-green-100 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Home size={18} />
              Home
            </div>
          </a>
          <a
            href="#portal"
            onClick={(e) => handleScroll(e, "portal")}
            className="text-white hover:text-green-100 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Share2 size={18} />
              Shared Portal
            </div>
          </a>
          <a
            href="#team"
            onClick={(e) => handleScroll(e, "team")}
            className="text-white hover:text-green-100 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Users size={18} />
              Our Team
            </div>
          </a>
          <a
            href="#activities"
            onClick={(e) => handleScroll(e, "activities")}
            className="text-white hover:text-green-100 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Activity size={18} />
              Activities
            </div>
          </a>
          <Link
            to="/commercial"
            className="text-white hover:text-green-100 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Video size={18} />
              Commercial
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
