import { Target, BookOpen, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
          <h2 className="text-4xl font-bold text-primary">
            {t("about.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t("about.paragraph1")}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              {t("about.paragraph2")}
            </p>

            <div className="pt-4"></div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-8">
            {/* Feature cards section */}
            <div className="grid grid-cols-1 gap-6">
              {/* Card 1 */}
              <div className="bg-white dark:bg-accent/30 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary/5 dark:hover:bg-accent/40 group">
                <div className="text-secondary mb-4  transition-transform duration-300">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {t("about.vision.title")}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t("about.vision.description")}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-accent/30 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary/5 dark:hover:bg-accent/40 group">
                <div className="text-secondary mb-4  transition-transform duration-300">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {t("about.mission.title")}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {t("about.mission.description")}
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-accent/30 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary/5 dark:hover:bg-accent/40 group">
                <div className="text-secondary mb-4  transition-transform duration-300">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {t("about.values.title")}
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                    <span>{t("about.values.value1")}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                    <span>{t("about.values.value2")}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                    <span>{t("about.values.value3")}</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                    <span>{t("about.values.value4")}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
