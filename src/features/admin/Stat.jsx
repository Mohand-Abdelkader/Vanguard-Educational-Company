// Color mapping for Tailwind CSS colors
const getColorClasses = (color) => {
  const colorMap = {
    blue: {
      bg: "bg-blue-100 dark:bg-blue-900/30",
      text: "text-blue-700 dark:text-blue-300",
      border: "border-blue-200 dark:border-blue-800",
    },
    green: {
      bg: "bg-green-100 dark:bg-green-900/30",
      text: "text-green-700 dark:text-green-300",
      border: "border-green-200 dark:border-green-800",
    },
    indigo: {
      bg: "bg-indigo-100 dark:bg-indigo-900/30",
      text: "text-indigo-700 dark:text-indigo-300",
      border: "border-indigo-200 dark:border-indigo-800",
    },
    yellow: {
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
      text: "text-yellow-700 dark:text-yellow-300",
      border: "border-yellow-200 dark:border-yellow-800",
    },
    orange: {
      bg: "bg-orange-100 dark:bg-orange-900/30",
      text: "text-orange-700 dark:text-orange-300",
      border: "border-orange-200 dark:border-orange-800",
    },
    red: {
      bg: "bg-red-100 dark:bg-red-900/30",
      text: "text-red-700 dark:text-red-300",
      border: "border-red-200 dark:border-red-800",
    },
    purple: {
      bg: "bg-purple-100 dark:bg-purple-900/30",
      text: "text-purple-700 dark:text-purple-300",
      border: "border-purple-200 dark:border-purple-800",
    },
    primary: {
      bg: "bg-primary-100 dark:bg-primary-900/30",
      text: "text-primary-700 dark:text-primary-300",
      border: "border-primary-200 dark:border-primary-800",
    },
  };

  return colorMap[color] || colorMap.blue; // Default to blue if color not found
};

function Stat({ children, title, value, color }) {
  const colorClasses = getColorClasses(color);

  return (
    <div className="flex gap-4 items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center ${colorClasses.bg}`}
      >
        <div className={colorClasses.text}>{children}</div>
      </div>

      <div>
        <h5 className="mb-1 text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">
          {title}
        </h5>
        <p className="text-2xl font-medium text-gray-900 dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );
}

export default Stat;
