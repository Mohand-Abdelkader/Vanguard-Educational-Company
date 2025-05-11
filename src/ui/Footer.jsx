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
                <Link
                  to="/about"
                  className="transition-colors hover:text-secondary"
                >
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("services")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  href="#services"
                  className="transition-colors hover:text-secondary"
                >
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("activities")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  href="#activities"
                  className="transition-colors hover:text-secondary"
                >
                  {t("footer.activities")}
                </a>
              </li>
              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("portal")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  href="#portal"
                  className="transition-colors hover:text-secondary"
                >
                  {t("footer.sharedPortal")}
                </a>
              </li>

              <li>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("team")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
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
              <a
                target="_blank"
                href="https://www.facebook.com/profile.php?id=100090617525610"
                className="transition-colors hover:text-secondary"
              >
                <Facebook className="w-5 h-5" />
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
