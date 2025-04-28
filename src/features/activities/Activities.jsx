import ActivityCard from "./ActivityCard";
function Activities() {
  const activities = [
    {
      icon: "Compass",
      title: "Outdoor Adventures",
      description:
        "Explore the natural beauty with our guided adventure tours and outdoor excursions.",
      color: "#058088",
    },
    {
      icon: "Users",
      title: "Community Projects",
      description:
        "Participate in local initiatives that make a real difference in our community.",
      color: "#02b8a9",
    },
    {
      icon: "GraduationCap",
      title: "Educational Workshops",
      description:
        "Expand your knowledge with interactive workshops led by industry experts.",
      color: "#4e314f",
    },
    {
      icon: "Award",
      title: "Competitions",
      description:
        "Test your skills and creativity in our regularly organized competitions.",
      color: "#06a7b0",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Our Activities</h2>
        <div className="w-24 h-1 bg-secondary mx-auto"></div>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Discover the range of engaging activities we offer to our community
          and members.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {activities.map((activity, index) => (
          <ActivityCard
            key={index}
            icon={activity.icon}
            title={activity.title}
            description={activity.description}
            color={activity.color}
          />
        ))}
      </div>
    </div>
  );
}

export default Activities;
