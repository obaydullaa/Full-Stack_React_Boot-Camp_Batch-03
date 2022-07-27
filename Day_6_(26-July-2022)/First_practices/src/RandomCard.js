function RandomCard({ cardValues, setPickedValue }) {
  return (
    <div>
      {cardValues.map((cardValue, index) => {
        return (
          <div
            className="card"
            key={index}
            onClick={() => setPickedValue(cardValue)}
          >
            {" "}
            {cardValue}
          </div>
        );
      })}
    </div>
  );
}
export default RandomCard;
