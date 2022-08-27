import React from "react";
import "./BurgerCard.scss";

const BurgerCard = (props) => {
  return (
    <div className="cardDiv">
      <img className="cardDiv__burgerImg" src={props.imagelink} />
      <h3 className="cardDiv__burgerName">{props.burgerName}</h3>
      <p className="cardDiv__burgerDesc">{props.burgerDesc}</p>
    </div>
  );
};

export default BurgerCard;
