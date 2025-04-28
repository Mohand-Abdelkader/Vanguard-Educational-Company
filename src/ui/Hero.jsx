import logo from "../assets/logo.png";
function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8 animate-fade-in">
          <div className="flex items-center gap-4">
            <h1 className="text-6xl font-serif text-primary dark:text-secondary leading-tight hover:scale-105 transition-transform">
              Vanguard Educational Company
            </h1>
          </div>
          <p className="text-accent dark:text-secondary/80 text-xl max-w-md capitalize">
            Each Generation Has Its Own Genius <br /> And Knowledge Is The Power
            For The Future
          </p>
          <div>
            <button className="bg-secondary hover:bg-secondary-dark text-white font-medium py-4 px-10 rounded-full transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg">
              Get in Touch
            </button>
          </div>
        </div>
        <div className="relative animate-fade-in mt-[10rem] ">
          <div className="aspect-square rounded-full bg-secondary/20 dark:bg-primary/30 absolute inset-0 m-auto w-[90%]"></div>
          <img
            src={logo}
            alt="Vanguard Logo"
            className="absolute inset-0 m-auto z-10 max-h-[400px] hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
