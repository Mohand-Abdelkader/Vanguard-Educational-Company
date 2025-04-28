import * as LucideIcons from "lucide-react";
function ActivityCard({ icon, title, description, color }) {
  const IconComponent = LucideIcons[icon];
  return (
    <div className="relative rounded-xl overflow-hidden group hover:scale-105 transition-all duration-300 bg-white dark:bg-gray-800 shadow-md">
      {/* Color banner now on left side */}
      <div
        className="absolute left-0 top-0 bottom-0 w-2 h-full"
        style={{ backgroundColor: color }}
      ></div>

      <div className="p-6 pl-8">
        {/* Top section with title and icon */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {title}
          </h3>

          <div
            className="w-12 h-12 rounded-full flex items-center justify-center text-white group-hover:rotate-12 transition-transform duration-300"
            style={{ backgroundColor: color }}
          >
            {IconComponent && <IconComponent size={24} />}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>

        {/* Button with background color */}
        <button
          className="mt-2 py-2 px-4 rounded-full text-white text-sm flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-2"
          style={{ backgroundColor: color }}
        >
          Explore
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
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>

      {/* Decorative element */}
      <div
        className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-10 transform rotate-45"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

export default ActivityCard;
