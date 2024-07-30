import React from "react";
import Icon from "../icons/Icon";
import "./Card.css";

const Card = ({ player, onPlay, index, gameEnd }) => {
  let icon = <Icon />;
  if (player === "X") icon = <Icon name="cross" />;
  else if (player === "O") icon = <Icon name="circle" />;
  return (
    <div className="card-wrapper" onClick={() => !gameEnd && onPlay(index)}>
      {icon}
    </div>
  );
};

export default Card;
