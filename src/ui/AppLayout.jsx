import { Heart, Star, Eye } from "lucide-react";
function AppLayout() {
  return (
    <div className="min-h-screen bg-primary/5 dark:bg-gray-900">
      {/* Hero Section */}
      <section id="home" className="bg-primary/10 dark:bg-gray-800 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center gap-4">
                <h1 className="text-7xl font-serif text-primary dark:text-secondary leading-tight hover:scale-105 transition-transform">
                  Design what you love
                </h1>
              </div>
              <p className="text-accent dark:text-secondary/80 text-xl max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                imperdiet sed id elementum.
              </p>
              <div>
                <button className="bg-secondary hover:bg-secondary-dark text-white font-medium py-4 px-10 rounded-full transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg">
                  Get started
                </button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-full bg-secondary/20 dark:bg-primary/30 absolute right-0 -top-10 w-[90%]"></div>
              <img
                src="/lovable-uploads/d3ed4013-5bc5-4789-bee3-40994d5419d4.png"
                alt="Vanguard Logo"
                className="relative z-10 max-h-[400px] mx-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Keep other sections but update their colors */}
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-gray-600 text-lg">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="bg-primary/5 rounded-lg p-8">
              {/* Feature cards section */}
              <div className="grid grid-cols-1 gap-6">
                {/* Card 1 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <div className="text-secondary mb-4">
                    <Heart size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Title
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <div className="text-secondary mb-4">
                    <Star size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Title
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-8 rounded-3xl shadow-sm">
                  <div className="text-secondary mb-4">
                    <Eye size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Title
                  </h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Portal Section */}
      <section id="portal" className="py-20 bg-primary/10 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-8">
            Shared Portal
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600 text-lg">
              Access our shared resources and collaborate with team members
              through our portal.
            </p>
          </div>
        </div>
      </section>

      {/* Team & Services Section */}
      <section id="team" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-8">
            Our Team & Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-primary/5 rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-secondary/20 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Team Member {i}
                </h3>
                <p className="text-gray-600">Service Description</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities & Partners */}
      <section id="activities" className="py-20 bg-primary/10 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-8">
            Activities & Partners
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Activities
              </h3>
              <p className="text-gray-600">
                Explore our range of activities and events designed to engage
                and inspire.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Partners
              </h3>
              <p className="text-gray-600">
                Meet our trusted partners who help us deliver excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Video Section */}
      <section id="commercial" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-8">
            Commercial Videos
          </h2>
          <div className="aspect-video bg-primary/5 rounded-lg flex items-center justify-center">
            <p className="text-primary">Video Player Placeholder</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section id="contact" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-primary mb-12">Contact Us</h2>
          <ContactForm />
        </div>
      </section> */}
    </div>
  );
}

export default AppLayout;
