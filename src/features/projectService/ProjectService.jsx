import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "Layers",
    title: "Programs",
    description:
      "Explore the courses offered by Vanguard. Each course comes with a brief description to help you understand our focus areas.",
    info: "Course 1: Leadership and Management: Bief content about the course that highlights skills, objectives, and key outcomes.",
  },
  {
    icon: "Handshake",
    title: "Accreditation Partners",
    description:
      "Vanguard partners with prestigious accreditation bodies. Click on any organization below for more details.",
    info: "Array Global is a leading body in international accreditation. Learn more about their standards and how Vanguard collaborates with them.",
  },
  {
    icon: "Book",
    title: "Educational Management Services",
    description:
      "Discover the schools and organizations that Vanguard supports through comprehensive management and recruitment services.",
    info: "Future Leaders School Vanguard manages daily operations and strategic planning for Future Leaders.",
  },
  {
    icon: "Container",
    title: "Educational Supplies & Procurement",
    description:
      "Vanguard provides essential educational materials, including books (Egypt and Cambridge curricula) and customized supplies for schools.",
    info: "For schools requesting these services, please contact us directly or follow the procedures outlined here: Contact Vanguard with a detailed list of requested items., Receive a customized quote based on your school's needs., Complete the procurement process through our secure platform.",
  },
];
function ProjectService() {
  const projectService = services;
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
              key={service.title}
              title={service.title}
              icon={service.icon}
              description={service.description}
              info={service.info}
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
