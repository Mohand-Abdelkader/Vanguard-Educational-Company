import * as LucideIcons from "lucide-react";

function ServiceCard({ icon, title, description, color = "#509951" }) {
  const IconComponent = LucideIcons[icon];
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group">
      {/* Top accent color */}
      <div className="h-2" style={{ backgroundColor: color }}></div>

      <div className="p-8">
        {/* Icon with background */}
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: color }}
        >
          {IconComponent && <IconComponent size={28} />}
        </div>

        {/* Service title */}
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
          {title}
        </h3>

        {/* Service description */}
        <p className="text-gray-600 dark:text-gray-300">{description}</p>

        {/* Learn more link */}
        <div className="mt-6">
          <a
            href="#"
            className="inline-flex items-center text-sm font-medium transition-colors duration-300 group-hover:translate-x-2"
            style={{ color }}
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
              className="ml-2"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      {/* Background decorative element */}
      <div
        className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full opacity-10"
        style={{ backgroundColor: color }}
      ></div>
    </div>
  );
}

export default ServiceCard;
