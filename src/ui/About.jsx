import { Heart, Star, Eye } from "lucide-react";
function About() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-primary mb-8">About Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-gray-600 text-lg">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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
                <h3 className="text-xl font-bold text-gray-900 mb-2">Title</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <div className="text-secondary mb-4">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Title</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-8 rounded-3xl shadow-sm">
                <div className="text-secondary mb-4">
                  <Eye size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Title</h3>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
