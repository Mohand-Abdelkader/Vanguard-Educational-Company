import { Users, Building, GraduationCap } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ItemRequest from "../features/requests/ItemRequest";
function SharedPortal() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
        <h2 className="text-4xl font-bold text-primary">
          {t("portal.title", "Shared Portal")}
        </h2>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-3xl">
        {t(
          "portal.description",
          "Access our shared resources and collaborate with team members through our dedicated portals designed for students, partners, and school staff."
        )}
        <button
          className=" underline text-blue-700"
          onClick={() => setIsOpen(true)}
        >
          {t("portal.link")}
        </button>
      </p>
      {isOpen && (
        <ItemRequest
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          value={"create Account for Egy-Portal"}
        />
      )}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Student Service Portal */}
        <a
          target="_blank"
          href="https://shareedu-lms.com/grand/shareedulogin/?Utype=2" // Add your student portal link here
          className="bg-white dark:bg-accent/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
            <GraduationCap className="text-primary h-8 w-8 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            {t("portal.student.title", "Student Service")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t(
              "portal.student.description",
              "Access learning materials, submit assignments, and track your academic progress."
            )}
          </p>
          <div className="flex items-center text-primary font-medium">
            <span className="group-hover:mr-2 transition-all">
              {t("portal.enterPortal", "Enter Portal")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-0 group-hover:w-5 transition-all overflow-hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </a>

        {/* Partner Service Portal */}
        <a
          target="_blank"
          href="https://shareedu-lms.com/grand/shareedulogin/?Utype=3" // Add your partner portal link here
          className="bg-white dark:bg-accent/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 dark:bg-secondary/20 rounded-full mb-4 group-hover:bg-secondary/20 transition-colors">
            <Building className="text-secondary h-8 w-8 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-secondary transition-colors">
            {t("portal.partner.title", "Partner Service")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t(
              "portal.partner.description",
              "Collaborate on projects, access shared resources, and manage partnership initiatives."
            )}
          </p>
          <div className="flex items-center text-secondary font-medium">
            <span className="group-hover:mr-2 transition-all">
              {t("portal.enterPortal", "Enter Portal")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-0 group-hover:w-5 transition-all overflow-hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </a>

        {/* School Staff Service Portal */}
        <a
          target="_blank"
          href="https://shareedu-lms.com/grand/shareedulogin/?Utype=1" // Add your school staff portal link here
          className="bg-white dark:bg-accent/30 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 group"
        >
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full mb-4 group-hover:bg-primary/20 transition-colors">
            <Users className="text-primary h-8 w-8 group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
            {t("portal.staff.title", "School Staff Service")}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {t(
              "portal.staff.description",
              "Manage classes, access administrative tools, and coordinate with other staff members."
            )}
          </p>
          <div className="flex items-center text-primary font-medium">
            <span className="group-hover:mr-2 transition-all">
              {t("portal.enterPortal", "Enter Portal")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-0 group-hover:w-5 transition-all overflow-hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SharedPortal;
