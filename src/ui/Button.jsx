function Button({ children, onClick }) {
  if (onClick) {
    return (
      <>
        <button onClick={onClick}>{children}</button>
      </>
    );
  }

  return (
    <>
      <button>{children}</button>
    </>
  );
}

export default Button;
