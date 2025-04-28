function Button({ children, onClick }) {
  if (onClick) {
    return (
      <>
        <button
          className="bg-secondary hover:bg-secondary-dark text-white font-medium py-4 px-10 rounded-full transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg"
          onClick={onClick}
        >
          {children}
        </button>
      </>
    );
  }

  return (
    <>
      <button className="bg-secondary hover:bg-secondary-dark text-white font-medium py-4 px-10 rounded-full transition-all duration-300 text-lg hover:scale-105 hover:shadow-lg">
        {children}
      </button>
    </>
  );
}

export default Button;
