import Hero from "./Hero";
import About from "./About";
import SharedPortal from "./SharedPortal";
import TeamMembers from "../features/teamMember/TeamMembers";
import ProjectService from "../features/projectService/ProjectService";
import Activities from "../features/activities/Activities";
import AnimatedLogoCloud from "../features/logos/AnimatedLogoCloud";
import ContactUs from "./ContactUs";

function AppLayout() {
  return (
    <div className="min-h-screen bg-primary/5 dark:bg-accent">
      {/* Hero Section */}
      <section id="home" className="bg-primary/10 dark:bg-accent/90 pt-16">
        <Hero />
      </section>

      {/* Keep other sections but update their colors */}
      <section id="about" className="py-20 bg-white dark:bg-accent/80">
        <About />
      </section>

      {/* Shared Portal Section */}
      <section id="portal" className="py-20 bg-primary/10 dark:bg-accent">
        <SharedPortal />
      </section>

      {/* Team Member*/}
      <section id="team" className="py-20 bg-white dark:bg-accent/80">
        <TeamMembers />
      </section>

      {/* Service*/}
      <section id="services" className="py-20 bg-white dark:bg-gray-800">
        <ProjectService />
      </section>

      {/* Activities & Partners */}
      <section id="activities" className="py-20 bg-primary/10 dark:bg-accent">
        <Activities />
      </section>

      {/* Our Partners */}
      <section id="Partners" className="py-20 bg-white dark:bg-gray-800">
        <AnimatedLogoCloud />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-12">Contact Us</h2>
          <ContactUs />
        </div>
      </section>
    </div>
  );
}

export default AppLayout;
