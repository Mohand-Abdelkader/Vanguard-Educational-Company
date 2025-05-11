import Member from "./Member";
import { useTranslation } from "react-i18next";
import { useMembers } from "../../hooks/teamMemberCustomHook/useMembers";
import Loader from "../../ui/Loader";
import { Link } from "react-router-dom";

function TeamMember() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const { teamMembers, isLoading } = useMembers();
  if (isLoading) return <Loader />;

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
        <h2 className="text-4xl font-bold text-primary">{t("team.title")}</h2>
      </div>

      <p className="max-w-2xl mb-10 text-lg text-gray-600 dark:text-gray-300">
        {t("team.description")}
      </p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Link
            to={`/member/${member.name[lang]}`}
            state={member}
            key={member.id}
          >
            <Member
              key={member.id}
              name={member.name[lang]}
              title={member.title[lang]}
              image={member.image}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TeamMember;
//
