import logo from "../assets/logoLight.png";

import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-primary/10 -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-secondary/10 -z-10 blur-3xl"></div>

      <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="hidden w-2 h-16 rounded-full bg-secondary sm:block"></div>
            <h1 className="font-serif text-4xl leading-tight transition-transform sm:text-5xl md:text-6xl text-primary dark:text-secondary hover:scale-105">
              {t("hero.title")}
            </h1>
          </div>
          <p className="max-w-md text-lg capitalize text-accent dark:text-secondary/80 sm:text-xl">
            {t("hero.subtitle")} <br /> {t("hero.subtitlePart2")}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 text-base font-medium text-white transition-all duration-300 rounded-full bg-secondary hover:bg-secondary-dark sm:py-4 sm:px-10 sm:text-lg hover:scale-105 hover:shadow-lg"
            >
              {t("hero.getInTouch")}
            </a>
            <div className="hidden w-16 h-1 rounded-full sm:block bg-primary/30"></div>
          </div>
        </div>

        <div className="relative h-[400px] sm:h-[450px] animate-fade-in mt-8 lg:mt-0">
          {/* Multiple decorative circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full bg-secondary/10 dark:bg-primary/20 animate-pulse"></div>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] rounded-full bg-primary/15 dark:bg-secondary/15 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] rounded-full bg-secondary/20 dark:bg-primary/30"></div>

          {/* Small floating circles */}
          <div className="absolute top-[15%] right-[15%] w-6 h-6 rounded-full bg-primary animate-bounce"></div>
          <div
            className="absolute bottom-[20%] left-[20%] w-4 h-4 rounded-full bg-secondary animate-bounce"
            style={{ animationDelay: "0.5s" }}
          ></div>

          {/* Logo centered properly */}
          <img
            src={logo}
            alt={t("hero.logoAlt")}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
