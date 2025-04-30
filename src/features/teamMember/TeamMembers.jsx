import Member from "./Member";
import { getMembers } from "../../services/memberApi";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function TeamMember() {
  const [teamMembers, setTeamMembers] = useState([]);
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const members = await getMembers();
        setTeamMembers(members);
      } catch (error) {
        console.error("Error fetching team members:", error);
      }
    };

    fetchMembers();
  }, []);

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
