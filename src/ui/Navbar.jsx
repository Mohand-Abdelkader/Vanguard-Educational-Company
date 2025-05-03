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
  Globe,
  ChevronDown,
  Pen,
  Shield,
  Pointer,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { t, i18n } = useTranslation();

  // Handle language change
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageMenu(false);
  };

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
                <Home size={18} />
                {t("nav.home")}
              </Link>

              <Link
                to="/commercial"
                className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:scale-105 transition-all"
              >
                <Video size={18} />
                {t("nav.commercial")}
              </Link>
              <Link
                to="/blogs"
                className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:scale-105 transition-all"
              >
                <Pen size={18} />
                Blogs
              </Link>
              <Link
                to="/request"
                className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:scale-105 transition-all"
              >
                <Pointer size={18} />
                Join our Team
              </Link>
              <Link
                to="/admin"
                className="text-white hover:text-green-100 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 hover:scale-105 transition-all"
              >
                <Shield size={18} />
                Admin
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Language Switcher - Updated Modern Design */}
            <div className="relative">
              <button
                className="text-white hover:text-green-100 px-3 py-1.5 rounded-full hover:bg-white/10 transition-all duration-300 flex items-center gap-2 border border-white/20"
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                aria-label="Change language"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">
                  {i18n.language === "ar" ? "العربية" : "English"}
                </span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-300 ${
                    showLanguageMenu ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Language dropdown menu - Updated Modern Design */}
              {showLanguageMenu && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black/5 focus:outline-none z-50 overflow-hidden transition-all duration-300 animate-fadeIn">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <button
                      onClick={() => changeLanguage("en")}
                      className={`${
                        i18n.language === "en"
                          ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light font-medium"
                          : "text-gray-700 dark:text-gray-200"
                      } flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left transition-colors duration-200`}
                      role="menuitem"
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          i18n.language === "en"
                            ? "bg-primary"
                            : "bg-transparent"
                        }`}
                      ></span>
                      {t("language.english")}
                    </button>
                    <button
                      onClick={() => changeLanguage("ar")}
                      className={`${
                        i18n.language === "ar"
                          ? "bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light font-medium"
                          : "text-gray-700 dark:text-gray-200"
                      } flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left transition-colors duration-200`}
                      role="menuitem"
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${
                          i18n.language === "ar"
                            ? "bg-primary"
                            : "bg-transparent"
                        }`}
                      ></span>
                      {t("language.arabic")}
                    </button>
                  </div>
                </div>
              )}
            </div>

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
              {t("nav.home")}
            </div>
          </a>
          <a
            href="#portal"
            onClick={(e) => handleScroll(e, "portal")}
            className="text-white hover:text-green-100 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Share2 size={18} />
              {t("nav.sharedPortal")}
            </div>
          </a>
          <a
            href="#team"
            onClick={(e) => handleScroll(e, "team")}
            className="text-white hover:text-green-100 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Users size={18} />
              {t("nav.ourTeam")}
            </div>
          </a>
          <a
            href="#activities"
            onClick={(e) => handleScroll(e, "activities")}
            className="text-white hover:text-green-100 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Activity size={18} />
              {t("nav.activities")}
            </div>
          </a>
          <Link
            to="/commercial"
            className="text-white hover:text-green-100 block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Video size={18} />
              {t("nav.commercial")}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
