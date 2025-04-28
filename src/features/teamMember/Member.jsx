function Member({ name, title, image }) {
  return (
    <div className="bg-white dark:bg-accent/30 rounded-xl p-2 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="relative mb-6">
        <div className="w-28 h-28 sm:w-32 sm:h-32 bg-secondary/20 rounded-full mx-auto overflow-hidden border-4 border-primary/10 group-hover:border-primary/30 transition-colors">
          <img
            src={image}
            alt={`${name}`}
            className="w-full h-full object-cover"
          />
        </div>
        {title && (
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-medium py-1 px-3 rounded-full shadow-md">
            {title}
          </div>
        )}
      </div>
      <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-secondary transition-colors text-center">
        {name}
      </h3>
      {!title && <div className="h-6"></div>} {/* Spacer when no title */}
      <div className="mt-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

export default Member;
