import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { getService } from "../../services/projectServiceApi";

function ProjectService() {
  const [projectService, setProjectService] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const services = await getService();
        setProjectService(services);
      } catch (error) {
        console.error("Error fetching project services:", error);
      }
    };

    fetchServices();
  }, []);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projectService.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title.en}
              icon={service.icon}
              description={service.description.en}
              info={service.info.en}
            />
          ))}
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
