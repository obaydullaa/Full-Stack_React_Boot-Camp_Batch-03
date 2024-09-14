function IsOddOrEven({ count, pickedValue }) {
  const oddOrEven = pickedValue % 2 === 0 ? "even" : "odd";
  return (
    <div>
      {/* <h2>Number is {count % 2 === 0 ? "Even" : "Odd"}</h2> */}
      {/* <h2>Number is {pickedValue && pickedValue % 2 === 0 ? <span className="even">Even</span> : <span className="odd">Odd</span> }</h2> */}
      <h2>
        Number is {" - "}
        {pickedValue && (
          <span className={oddOrEven === "even" ? "even" : "odd"}>
            {oddOrEven}
          </span>
        )}
      </h2>
    </div>
  );
}

export default IsOddOrEven;
