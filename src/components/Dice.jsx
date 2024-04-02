import React, { useState, useEffect } from "react";

function Dice() {
  const [diceImage, setDiceImage] = useState(
    "src/assets/images/dice-empty.png"
  );
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = async () => {
    setIsRolling(true);
    setDiceImage(".src/assets/images/dice-empty.png");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const randomValue = Math.floor(Math.random() * 6) + 1;
    setDiceImage(`src/assets/images/dice${randomValue}.png`);
    setIsRolling(false);
  };

  return (
    <div onClick={!isRolling && rollDice}>
      <img src={diceImage} alt="Dice" />
    </div>
  );
}

export default Dice;
