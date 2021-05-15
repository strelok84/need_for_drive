import React from "react";

function Card(props) {
  return (
    <div>
      <div>{props.name}</div>
      <div>
        {props.costMin}-{props.costMax}
      </div>
      <img alt="model"></img>
    </div>
  );
}

export default Card;
