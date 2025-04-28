import ServiceCard from "./ServiceCard";
function ProjectService() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl font-bold text-primary mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We provide innovative solutions to help your business thrive in
            today's competitive marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            icon="Layers"
            title="Web Development"
            description="Custom websites and web applications built with the latest technologies."
            color="#058088"
          />
          <ServiceCard
            icon="Activity"
            title="Digital Marketing"
            description="Strategic marketing campaigns to boost your online presence and drive growth."
            color="#02b8a9"
          />
          <ServiceCard
            icon="Rocket"
            title="Brand Strategy"
            description="Comprehensive brand development to help you stand out in the marketplace."
            color="#4e314f"
          />
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="bg-secondary hover:bg-secondary-dark text-white font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("contact");
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
          >
            Get Started with Our Services
          </a>
        </div>
      </div>
    </>
  );
}

export default ProjectService;
