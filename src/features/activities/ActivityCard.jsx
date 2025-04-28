import * as LucideIcons from "lucide-react";

function ActivityCard({ icon, title, description, color }) {
  const IconComponent = LucideIcons[icon];
  return (
    <div className="relative rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 bg-white dark:bg-accent/30 shadow-md h-full flex flex-col">
      {/* Color accent on top */}
      <div
        className="absolute left-0 top-0 right-0 h-1.5"
        style={{ backgroundColor: color }}
      ></div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Icon at top center */}
        <div className="flex justify-center mb-5">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300"
            style={{ backgroundColor: color }}
          >
            {IconComponent && <IconComponent size={28} />}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 text-center">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-center mb-6 flex-grow">
          {description}
        </p>

        {/* Button with background color */}
        <div className="flex justify-center mt-auto">
          <button
            className="py-2.5 px-5 rounded-full text-white text-sm flex items-center gap-2 transition-all duration-300 group-hover:shadow-lg transform group-hover:translate-y-[-2px]"
            style={{ backgroundColor: color }}
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-5"
        style={{ backgroundColor: color }}
      ></div>
      <div
        className="absolute -top-10 -left-10 w-24 h-24 rounded-full opacity-5"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

export default ActivityCard;
