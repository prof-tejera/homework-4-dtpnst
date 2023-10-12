const Number = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  const handleClick = () => {
    onClick(value)
  };

  return (
    <div
      className={(value === 0) ? "zero" : "number"}
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default Number;
