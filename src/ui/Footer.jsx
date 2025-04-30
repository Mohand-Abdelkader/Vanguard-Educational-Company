import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Copyright,
} from "lucide-react";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">{t("hero.title")}</h4>
            <p className="text-gray-200 text-sm">
              {t("hero.subtitle")}
              <br />
              {t("hero.subtitlePart2")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">{t("footer.quickLinks")}</h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a
                  href="#about"
                  className="hover:text-secondary transition-colors"
                >
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-secondary transition-colors"
                >
                  {t("footer.services")}
                </a>
              </li>
              <li>
                <a
                  href="#activities"
                  className="hover:text-secondary transition-colors"
                >
                  {t("footer.activities")}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-secondary transition-colors"
                >
                  {t("footer.contact")}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg">
              {" "}
              {t("footer.servicesSection")}
            </h4>
            <ul className="space-y-2 text-gray-200">
              <li>
                <a
                  href="#portal"
                  className="hover:text-secondary transition-colors"
                >
                  {t("footer.sharedPortal")}
                </a>
              </li>
              <li>
                <a
                  href="#commercial"
                  className="hover:text-secondary transition-colors"
                >
                  {t("footer.commercialVideos")}
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-secondary transition-colors"
                >
                  {t("footer.ourTeam")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-lg"> {t("footer.followUs")}</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-dark mt-8 pt-8 flex items-center justify-center text-sm text-gray-200">
          <Copyright className="h-4 w-4 mr-2" />
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
