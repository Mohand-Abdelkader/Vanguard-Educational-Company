import Button from "../../ui/Button";
import { useTranslation } from "react-i18next";

function Member({ name, title, image }) {
  const { t } = useTranslation();

  return (
    <div className="p-2 transition-all duration-300 transform bg-white shadow-sm dark:bg-accent/30 rounded-xl hover:shadow-lg hover:-translate-y-2 group">
      <div className="relative mb-6">
        <div className="mx-auto overflow-hidden transition-colors border-4 rounded-full w-28 h-28 sm:w-32 sm:h-32 bg-secondary/20 border-primary/10 group-hover:border-primary/30">
          <img
            src={image}
            alt={`${name}`}
            className="object-cover w-full h-full"
          />
        </div>
        {title && (
          <div className="absolute px-3 py-1 text-xs font-medium text-white transform -translate-x-1/2 rounded-full shadow-md -bottom-3 left-1/2 bg-primary">
            {title}
          </div>
        )}
      </div>
      <h3 className="mb-2 text-xl font-semibold text-center transition-colors text-primary group-hover:text-secondary">
        {name}
      </h3>
      {!title && <div className="h-6"></div>} {/* Spacer when no title */}
      <div className="flex justify-center mt-4 space-x-3 transition-opacity opacity-0 group-hover:opacity-100">
        <Button size="small">{t("team.knowMore")}</Button>
      </div>
    </div>
  );
}

export default Member;
