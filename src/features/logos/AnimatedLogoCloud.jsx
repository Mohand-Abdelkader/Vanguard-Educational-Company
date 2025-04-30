import { getLogos } from "../../services/logoApi";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const AnimatedLogoCloud = () => {
  const { t } = useTranslation();
  const [logos, setLogos] = useState([]);
  useEffect(() => {
    const fetchLogos = async () => {
      try {
        const logosData = await getLogos();
        setLogos(logosData);
      } catch (error) {
        console.error("Error fetching logos:", error);
      }
    };

    fetchLogos();
  }, []);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
          <h2 className="text-3xl font-bold text-primary">
            {t("logos.title")}
          </h2>
          <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
        </div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center">
          {t("logos.description")}
        </p>
      </div>

      <div className="w-full py-8 bg-gray-50 dark:bg-accent/10 rounded-xl">
        <div className="mx-auto w-full px-4 md:px-8">
          <div
            className="relative mt-6 flex gap-6 overflow-hidden p-2"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            {/* Create two copies of the logo set for seamless looping */}
            {[1, 2, 3, 4, 5].map((setIndex) => (
              <div
                key={`logo-set-${setIndex}`}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-8"
              >
                {logos.map((logo, logoIndex) => (
                  <a
                    key={`logo-${setIndex}-${logoIndex}`}
                    href={logo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mx-4 transition-transform hover:scale-110 duration-300"
                  >
                    <img
                      src={logo.url}
                      className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 hover:drop-shadow-md transition-all duration-300"
                      alt={`${logo.name} logo`}
                      onError={(e) => {
                        console.error(`Failed to load image: ${logo.url}`);
                        e.target.src =
                          "https://via.placeholder.com/150x50?text=Logo";
                      }}
                    />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
