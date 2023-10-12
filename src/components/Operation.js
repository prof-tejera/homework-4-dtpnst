const Operation = ({ value, onClick }) => {
  /** TODO: What happens when a user clicks an Operation, what do we want to pass to our parent? */
  const handleClick = () => {
    onClick(value)
  };

  return (
    <div
      className="operation"
      onClick={handleClick}
    >
      {value}
    </div>
  );
};

export default Operation;
