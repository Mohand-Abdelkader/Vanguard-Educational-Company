// Instructions for integrating continuous logo animation in Tailwind CSS:
// Add the following configurations to the `extend` section of your `tailwind.config.js`:
// 1. Keyframes for 'logo-cloud' animation that continuously moves logos from right to left:
//    keyframes: {
//      'logo-cloud': {
//        from: { transform: 'translateX(0)' },
//        to: { transform: 'translateX(calc(-100% - 4rem))' },
//      },
//    }
// 2. Animation utility to apply this keyframe:
//    animation: {
//      'logo-cloud': 'logo-cloud 30s linear infinite', // Adjust duration and timing as needed for your design.
//    }

const logos = [
  {
    name: "Vanguard",
    url: "https://vanguardeducationcompany.com/assets/images/partners/flis.jpeg",
    link: "https://www.google.com/",
  },
  {
    name: "Mis",
    url: "https://vanguardeducationcompany.com/assets/images/partners/mis.jpeg",
    link: "https://www.google.com/",
  },
  {
    name: "array",
    url: "https://vanguardeducationcompany.com/assets/images/partners/array.jpeg",
    link: "https://www.google.com/",
  },
  {
    name: "alfaq",
    url: "https://vanguardeducationcompany.com/assets/images/partners/alfaq.jpeg",
    link: "https://www.google.com/",
  },
  {
    name: "manarat",
    url: "https://vanguardeducationcompany.com/assets/images/partners/manarat.jpeg",
    link: "https://www.google.com/",
  },
  {
    name: "aou",
    url: "https://vanguardeducationcompany.com/assets/images/partners/aou.jpeg",
    link: "https://www.google.com/",
  },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
          <h2 className="text-3xl font-bold text-primary">Our Partners</h2>
          <div className="w-12 h-1.5 bg-secondary rounded-full"></div>
        </div>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center">
          We're proud to collaborate with these amazing organizations.
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
            {[1, 2].map((setIndex) => (
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
