import React from "react";
import Star from "./Star";

class ShowStarsClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rate: 0,
    };
  }

  render() {
    return (
      <div className="stars-container">
        <p>Class one:</p>
        {[...new Array(5)].map((item, i) => {
          i += 1;
          return (
            <Star
              key={i}
              className={`star ${i <= this.state.rate ? "active" : ""}`}
              onClick={() => {
                this.setState({ ...this.state, rate: i });
              }}
            ></Star>
          );
        })}
        <p>Your rating: {this.state.rate}</p>
      </div>
    );
  }
}

export default ShowStarsClass;
