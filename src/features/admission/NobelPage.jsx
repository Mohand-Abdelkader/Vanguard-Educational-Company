import AdmissionForm from "./AdmissionForm";
import { GraduationCap, Globe, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

function NobelPage() {
  const { t } = useTranslation();

  return (
    <div className="mt-10 min-h-screen dark:bg-accent/95">
      {/* Hero Section */}
      <div className="relative py-20 bg-accent dark:bg-accent/50">
        <div className="absolute inset-0 bg-[url('https://old.duan.edu.ua/international/wp-content/uploads/2022/11/city_and_university_31.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 px-4 mx-auto text-center text-white">
          <h1 className="mb-6 text-5xl font-bold leading-tight">{t("nobel.hero.title")}</h1>
          <p className="mb-8 text-xl font-light">{t("nobel.hero.subtitle")}</p>
          <button className="px-8 py-3 font-bold text-white rounded-full transition duration-300 bg-primary hover:bg-primary-dark shadow-lg hover:shadow-xl transform hover:-translate-y-1 dark:bg-primary/90 dark:hover:bg-primary">
            {t("nobel.hero.learnMore")}
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container px-4 py-16 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-8 text-center rounded-xl bg-white dark:bg-accent/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <GraduationCap className="w-12 h-12 text-primary dark:text-primary/90" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-accent dark:text-white">
              {t("nobel.features.dualDiplomas.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t("nobel.features.dualDiplomas.description")}
            </p>
          </div>
          <div className="p-8 text-center rounded-xl bg-white dark:bg-accent/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <Users className="w-12 h-12 text-primary dark:text-primary/90" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-accent dark:text-white">
              {t("nobel.features.exchangePrograms.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t("nobel.features.exchangePrograms.description")}
            </p>
          </div>
          <div className="p-8 text-center rounded-xl bg-white dark:bg-accent/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex justify-center mb-6">
              <Globe className="w-12 h-12 text-primary dark:text-primary/90" />
            </div>
            <h3 className="mb-3 text-xl font-bold text-accent dark:text-white">
              {t("nobel.features.recognition.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {t("nobel.features.recognition.description")}
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center bg-gradient-to-br from-accent to-accent/90 dark:from-accent/80 dark:to-accent/70">
        <div className="container px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold text-white">{t("nobel.cta.title")}</h2>
          <div className="max-w-2xl mx-auto bg-white dark:bg-accent/30 rounded-2xl shadow-2xl p-8">
            <AdmissionForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NobelPage;