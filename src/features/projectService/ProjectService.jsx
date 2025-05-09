import ServiceCard from "./ServiceCard";

import { useTranslation } from "react-i18next";
import { useService } from "../../hooks/projectServiceCustomHooks/useService";
import Loader from "../../ui/Loader";

function ProjectService() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { projectService, isLoading } = useService();
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-primary mb-4">
            {t("services.title")}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("services.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectService.map((service) => (
            <ServiceCard
              service={service}
              key={service.id}
              title={service.title[lang]}
              icon={service.icon}
              description={service.description[lang]}
              info={service.info[lang]}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectService;
