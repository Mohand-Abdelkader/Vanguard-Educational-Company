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
import logo from "../assets/logoLight.png";
import logo2 from "../assets/logoDark.png";

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

  return (
    <nav
      className={`fixed w-full top-0 z-50 ${
        scrolled
          ? "bg-primary/95 dark:bg-accent/95 backdrop-blur-sm"
          : "bg-primary dark:bg-accent"
      } shadow-lg transition-all duration-300`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={isDarkMode ? logo2 : logo}
                alt="Vanguard Logo"
                className="w-auto h-8 transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:ml-6 md:flex md:space-x-4">
              <Link
                to="/"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white transition-all rounded-md hover:text-green-100 hover:scale-105"
              >
                <Home size={18} />
                {t("nav.home")}
              </Link>

              <Link
                to="/about"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white transition-all rounded-md hover:text-green-100 hover:scale-105"
              >
                <Users size={18} />
                {t("nav.aboutUs")}
              </Link>
              <Link
                to="/blogs"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white transition-all rounded-md hover:text-green-100 hover:scale-105"
              >
                <Pen size={18} />
                {t("nav.blogs")}
              </Link>
              <Link
                to="/request"
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white transition-all rounded-md hover:text-green-100 hover:scale-105"
              >
                <Pointer size={18} />
                {t("nav.joinTeam")}
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
                <Globe className="w-4 h-4" />
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
                <div className="absolute right-0 z-50 w-48 mt-2 overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-lg dark:bg-gray-800 ring-1 ring-black/5 focus:outline-none animate-fadeIn">
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
              className="p-2 text-white transition-colors duration-300 rounded-full hover:text-green-100 hover:bg-white/10"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              className="p-2 text-white transition-colors duration-300 rounded-full md:hidden hover:text-green-100 hover:bg-white/10"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
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
          <Link
            to="/"
            className="block px-3 py-2 text-base font-medium text-white rounded-md hover:text-green-100 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Home size={18} />
              {t("nav.home")}
            </div>
          </Link>

          <Link
            to="/about"
            className="block px-3 py-2 text-base font-medium text-white rounded-md hover:text-green-100 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Users size={18} />
              {t("nav.aboutUs")}
            </div>
          </Link>

          <Link
            to="/blogs"
            className="block px-3 py-2 text-base font-medium text-white rounded-md hover:text-green-100 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Pen size={18} />
              {t("nav.blogs")}
            </div>
          </Link>

          <Link
            to="/request"
            className="block px-3 py-2 text-base font-medium text-white rounded-md hover:text-green-100 hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <Pointer size={18} />
              {t("nav.joinTeam")}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
