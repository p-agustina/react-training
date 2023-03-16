import { useState } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png"


function Dice() {
    const [image, setImage] = useState()
    const dices = [dice1, dice2, dice3]

    const handleClick = () => {
        setImage(diceEmpty);
        setTimeout(() => {
          const randomIndex = Math.floor(Math.random() * dices.length);
          setImage(dices[randomIndex]);
        }, 1000);
      };


    return ( 
    <div className="Dice">
    <a onClick={handleClick} href="#">
        <img src={image} alt="dice face" />
    </a>

    </div> );
}

export default Dice