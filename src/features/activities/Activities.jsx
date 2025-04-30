import { getActivities } from "../../services/activitesApi";
import ActivityCard from "./ActivityCard";
import { useState, useEffect } from "react";

function Activities() {
  const [activities, setActivities] = useState([]);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activitiesData = await getActivities();
        setActivities(activitiesData);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);
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
        {activities.slice(0, visibleItems).map((activity) => (
          <ActivityCard
            key={activity.id}
            icon={activity.icon}
            title={activity.title.en}
            description={activity.description.en}
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
