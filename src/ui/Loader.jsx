import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

function Loader({ size = "medium", showLogo = true, text = "Loading..." }) {
  const { t } = useTranslation();

  // Size classes mapping
  const sizeClasses = {
    small: {
      container: "h-[150px] w-[150px]",
      outerCircle: "w-[120px] h-[120px]",
      middleCircle: "w-[90px] h-[90px]",
      innerCircle: "w-[60px] h-[60px]",
      logo: "w-[50px] h-[50px]",
      smallCircle1: "w-3 h-3",
      smallCircle2: "w-2 h-2",
    },
    medium: {
      container: "h-[220px] w-[220px]",
      outerCircle: "w-[180px] h-[180px]",
      middleCircle: "w-[140px] h-[140px]",
      innerCircle: "w-[100px] h-[100px]",
      logo: "w-[80px] h-[80px]",
      smallCircle1: "w-4 h-4",
      smallCircle2: "w-3 h-3",
    },
    large: {
      container: "h-[300px] w-[300px]",
      outerCircle: "w-[240px] h-[240px]",
      middleCircle: "w-[190px] h-[190px]",
      innerCircle: "w-[140px] h-[140px]",
      logo: "w-[120px] h-[120px]",
      smallCircle1: "w-6 h-6",
      smallCircle2: "w-4 h-4",
    },
  };

  const classes = sizeClasses[size] || sizeClasses.medium;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className={`relative ${classes.container}`}>
        {/* Outer pulsing circle */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${classes.outerCircle} rounded-full bg-secondary/10 dark:bg-primary/20 animate-pulse`}
        ></div>

        {/* Middle pulsing circle */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${classes.middleCircle} rounded-full bg-primary/15 dark:bg-secondary/15 animate-pulse`}
          style={{ animationDelay: "0.7s" }}
        ></div>

        {/* Inner static circle */}
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${classes.innerCircle} rounded-full bg-secondary/20 dark:bg-primary/30`}
        ></div>

        {/* Small floating circles */}
        <div
          className={`absolute top-[15%] right-[15%] ${classes.smallCircle1} rounded-full bg-primary animate-bounce`}
        ></div>
        <div
          className={`absolute bottom-[20%] left-[20%] ${classes.smallCircle2} rounded-full bg-secondary animate-bounce`}
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Rotating small circle */}
        <div
          className={`absolute ${classes.smallCircle1} rounded-full bg-secondary/80`}
          style={{
            top: "30%",
            left: "10%",
            animation: "spin 3s linear infinite",
          }}
        ></div>

        {/* Logo centered properly (optional) */}
        {showLogo && (
          <img
            src={logo}
            alt={t("loader.logoAlt", "Loading...")}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 ${classes.logo} object-contain animate-pulse`}
            style={{ animationDuration: "2s" }}
          />
        )}
      </div>

      {/* Optional loading text */}
      {text && (
        <p className="mt-4 text-primary dark:text-secondary text-lg font-medium">
          {text}
        </p>
      )}
    </div>
  );
}

export default Loader;
