import logo from "../assets/logo.png";

function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -z-10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full -z-10 blur-3xl"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="w-2 h-16 bg-secondary rounded-full hidden sm:block"></div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-primary dark:text-secondary leading-tight hover:scale-105 transition-transform">
              Vanguard Educational Company
            </h1>
          </div>
          <p className="text-accent dark:text-secondary/80 text-lg sm:text-xl max-w-md capitalize">
            Each Generation Has Its Own Genius <br /> And Knowledge Is The Power
            For The Future
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-secondary hover:bg-secondary-dark text-white font-medium py-3 sm:py-4 px-6 sm:px-10 rounded-full transition-all duration-300 text-base sm:text-lg hover:scale-105 hover:shadow-lg">
              Get in Touch
            </button>
            <div className="hidden sm:block w-16 h-1 bg-primary/30 rounded-full"></div>
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
            alt="Vanguard Logo"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
