const Number = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks a number, what do we want to pass to our parent? */
  const handleClick = () => {
    onClick(value)
  };

  return (
    <div
      style={{
        padding: 10,
        border: "1px solid black",
        width: 60,
      }}
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default Number;
