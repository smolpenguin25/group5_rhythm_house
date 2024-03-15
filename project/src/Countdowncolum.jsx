function CountdownColumn({ value, unit, isLast }) {
    return (
      <div className={`countdown-column ${isLast ? "last-column" : ""}`}>
        <button className="countdown-value">{value}</button>
        <div className="countdown-unit">{unit}</div>
      </div>
    );
  }

  export default CountdownColumn;