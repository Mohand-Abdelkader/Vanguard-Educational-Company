import ActivityCard from "./ActivityCard";
import { useState } from "react";

const projectActivities = [
  {
    icon: "Microscope",
    title: "Outdoor STEAM Program",
    description:
      "Our STEAM program fosters innovation and critical thinking by integrating Science, Technology, Engineering, Arts, and Mathematics. Hands-on projects prepare students to excel in an evolving world.",
  },
  {
    icon: "Bot",
    title: "Programming & AI - Robotics",
    description:
      "Students master programming to develop AI technologies, creating intelligent systems that learn and adapt. This foundation supports innovation in a technology-driven world.",
  },
  {
    icon: "Calculator",
    title: "Mental Math",
    description:
      "The Mental Math program enhances arithmetic skills through mental calculation exercises, improving numerical fluency and cognitive flexibility without relying on calculators.",
  },
  {
    icon: "School",
    title: "Academic Advisor Program",
    description:
      "Our Academic Advisors guide students in navigating educational paths, setting academic goals, and making informed decisions to ensure they reach their full potential.",
  },
  {
    icon: "Binoculars",
    title: "Scout Number Program",
    description:
      "The Scout Number program promotes practical problem-solving and analytical skills, enabling students to make data-driven decisions in real-world scenarios.",
  },
];

function Activities() {
  const activities = projectActivities;
  const [visibleItems, setVisibleItems] = useState(4);

  const showMore = () => {
    setVisibleItems(activities.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
          <h2 className="text-4xl font-bold text-primary">Our Activities</h2>
          <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
        </div>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center">
          Discover the range of engaging activities we offer to our community
          and members to foster growth and learning.
        </p>
      </div>

      {/* Responsive grid with equal height cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        {activities.slice(0, visibleItems).map((activity, index) => (
          <ActivityCard
            key={activity.title}
            icon={activity.icon}
            title={activity.title}
            description={activity.description}
            color={"#509951"}
          />
        ))}
      </div>

      {/* Show more button if there are hidden items */}
      {visibleItems < activities.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={showMore}
            className="bg-secondary hover:bg-secondary-dark text-white font-medium py-2.5 px-6 rounded-full transition-all duration-300 hover:shadow-lg transform hover:scale-105"
          >
            Show More Activities
          </button>
        </div>
      )}
    </div>
  );
}

export default Activities;
