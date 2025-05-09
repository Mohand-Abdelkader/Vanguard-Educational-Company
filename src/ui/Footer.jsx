import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Copyright,
  Github,
} from "lucide-react";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="py-12 text-white bg-primary">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">{t("hero.title")}</h4>
            <p className="text-sm text-gray-200">
              {t("hero.subtitle")}
              <br />
              {t("hero.subtitlePart2")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a
                  href="#about"
                  className="transition-colors hover:text-secondary"
                >
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="transition-colors hover:text-secondary"
                >
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="transition-colors hover:text-secondary"
                >
                  {t("footer.activities")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="transition-colors hover:text-secondary"
                >
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">
              {" "}
              {t("footer.servicesSection")}
            </h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a
                  href="#portal"
                  className="transition-colors hover:text-secondary"
                >
                  {t("footer.sharedPortal")}
                </a>
              </li>

              <li>
                <a
                  href="#team"
                  className="transition-colors hover:text-secondary"
                >
                  {t("footer.ourTeam")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold"> {t("footer.followUs")}</h4>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors hover:text-secondary">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="transition-colors hover:text-secondary">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="transition-colors hover:text-secondary">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="transition-colors hover:text-secondary">
                <Linkedin className="w-5 h-5" />
              </a>
              <Link
                to="/login"
                className="transition-colors hover:text-secondary"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center pt-8 mt-8 text-sm text-gray-200 border-t border-primary-dark">
          <Copyright className="w-4 h-4 mr-2" />
          <p>
            {new Date().getFullYear()} {t("hero.title")}.{" "}
            {t("footer.copyright")}.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
