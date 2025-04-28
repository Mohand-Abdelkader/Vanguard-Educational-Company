import { Target, BookOpen, Award } from "lucide-react";

function About() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
          <h2 className="text-4xl font-bold text-primary">About Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              At Vanguard Educational Company, we believe that education today
              faces unprecedented challenges. In a world where social media
              influences are stronger than ever, and traditional teaching
              methods can no longer keep pace with the needs of modern parents
              and students, a new approach is needed.
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Our response? A unique educational model that embraces scientific
              innovation while staying true to authentic values — preparing
              children for a rapidly changing world without losing their moral
              foundation.
            </p>

            <div className="pt-4">
              <a
                href="#services"
                className="inline-flex items-center text-secondary font-medium hover:text-secondary-dark transition-colors"
              >
                Discover our services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-8">
            {/* Feature cards section */}
            <div className="grid grid-cols-1 gap-6">
              {/* Card 1 */}
              <div className="bg-white dark:bg-accent/30 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary/5 dark:hover:bg-accent/40 group">
                <div className="text-secondary mb-4  transition-transform duration-300">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  Our Vision
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  We aim to bridge the gap between modern education and
                  traditional values, helping students thrive intellectually,
                  socially, and ethically.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-accent/30 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary/5 dark:hover:bg-accent/40 group">
                <div className="text-secondary mb-4  transition-transform duration-300">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  Our Mission
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  To develop innovative educational solutions that combine
                  academic excellence, character building, and cultural
                  authenticity, empowering the next generation for future
                  success.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-accent/30 p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary/5 dark:hover:bg-accent/40 group">
                <div className="text-secondary mb-4  transition-transform duration-300">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  Our Values
                </h3>
                <ul className="text-gray-700 dark:text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                    <span>Commitment to virtue and ideals</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                    <span>Embracing scientific and cultural diversity</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                    <span>Continuous development and adaptability</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></div>
                    <span>Respect for heritage while advancing innovation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
