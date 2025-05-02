import Member from "./Member";
import { useTranslation } from "react-i18next";
import { useMembers } from "../../hooks/teamMemberCustomHook/useMembers";
import Loader from "../../ui/Loader";

function TeamMember() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { teamMembers, isLoading } = useMembers();
  if (isLoading) return <Loader />;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
        <h2 className="text-4xl font-bold text-primary">{t("team.title")}</h2>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-lg mb-10 max-w-2xl">
        {t("team.description")}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Member
            key={member.id}
            name={member.name[lang]}
            title={member.title[lang]}
            image={member.image}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamMember;
