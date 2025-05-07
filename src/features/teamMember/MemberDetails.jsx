
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function MemberDetails() {
  const location = useLocation();
  const member = location.state;
  const { i18n } = useTranslation();
  const language = i18n.language;

  const isArabic = language === "ar";

  if (!member) return null;

  return (
    <div className="bg-white dark:bg-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <div
          className={`bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden ${
            isArabic ? "rtl text-right" : "ltr"
          }`}
        >
          {/* Header with image and basic info */}
          <div className="relative">
            <div className="h-48 bg-gradient-to-r from-primary/90 to-primary-dark flex items-end"></div>
            <div className="absolute inset-x-0 bottom-0 translate-y-1/2 flex justify-center md:justify-start md:px-10">
              <img
                src={member.image}
                alt={member.name[language]}
                className="w-36 h-36 rounded-full border-4 border-white dark:border-gray-800 object-cover shadow-lg"
              />
            </div>
          </div>

          {/* Member info */}
          <div className="pt-24 md:pt-20 px-6 pb-8 md:grid md:grid-cols-3 md:gap-8">
            {/* Left column - Basic info */}
            <div className="md:col-span-1 mb-8 md:mb-0">
              <div className="bg-gray-50 dark:bg-gray-700/30 rounded-lg p-6 shadow-sm">
                <div className="text-center md:text-left mb-6">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {member.name[language]}
                  </h1>
                  <p className="text-primary font-medium mt-1">
                    {member.title[language]}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {member.subTitle[language]}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h2 className="text-md font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                      </svg>
                      {isArabic ? "الموقع" : "Location"}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 pl-7">
                      {member.address[language]}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-md font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                          />
                      </svg>
                      {isArabic ? "التعليم" : "Education"}
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 pl-7">
                      {member.education[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Details */}
            <div className="md:col-span-2">
              {/* Summary */}
              <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
                  {isArabic ? "نبذة مختصرة" : "Summary"}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {member.summary[language]}
                </p>
              </div>

              {/* Experience */}
              <div className="mb-8 bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
                  {isArabic ? "الخبرات" : "Experience"}
                </h2>
                <ul className="space-y-3">
                  {(
                    member.experience?.[language] ||
                    member.experiences?.[language] ||
                    []
                  ).map((exp, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                          </svg>
                        </div>
                      </div>
                      <span className="ml-3 text-gray-700 dark:text-gray-300">
                        {exp}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-100 dark:border-gray-700">
                  {isArabic ? "نبذة تفصيلية" : "About"}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {member.description[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
               
  );
}

export default MemberDetails;
