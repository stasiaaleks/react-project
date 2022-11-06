import { useState } from "react";
import Star from "./Star";

function ShowStars() {
  const [rate, setRate] = useState(0);

  return (
    <div className="stars-container">
      <p>Functional one:</p>
      {[...new Array(5)].map((item, i) => {
        i += 1;
        return (
          <Star
            key={i}
            className={`star ${i <= rate ? "active" : ""}`}
            onClick={() => {
              setRate(i);
            }}
          ></Star>
        );
      })}
      <p>Your rate: {rate}</p>
    </div>
  );
}

export { ShowStars };

// next step - add btn to clear choice
