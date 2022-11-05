import { useState } from "react";
import Star from "./Star";

function ShowStars() {
  const [rate, setRating] = useState(0);

  return (
    <div className="stars-container">
      <p>Functional one:</p>
      {[...new Array(5)].map((item, i) => {
        i += 1; // why tf this works like this
        return (
          <Star
            key={i}
            className={`star ${i <= rate ? "active" : ""}`}
            onClick={(e) => {
              if (e.target) {
                setRating(i);
                console.log(rate);
              } else if (!e.target) {
                setRating(0);
              } // доделать это))
              // пришлось засунуть все в 1 мап, потому что он не находил индекс
            }}
          ></Star>
        );
      })}
      <p>Your rate: {rate}</p>
    </div>
  );
}

export { ShowStars };
