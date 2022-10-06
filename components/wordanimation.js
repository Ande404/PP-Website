import styles from "../components/wordanimation.module.css";
import { useState } from "react";

export default function WordAnimation({ char, i }) {
  const density = "Ñ@#W$9876543210?!abcdefghiklmnoprstuxwvz;:+=-,._";
  const [hover, setHover] = useState(false);
  var [letter, setLetter] = useState(char);

  var ind = 0;

  function HandleHover() {
    if (ind < density.length && char != density[ind]) {
      setHover(true);
      setLetter(density[ind]);
      ind++;
      setTimeout(HandleHover, 100);
    }
  }

  function HandleAnimeitonEnd() {
    setHover(false);
    setLetter(char);
  }

  return (
    <span
      onMouseOver={() => HandleHover()}
      //   onMouseLeave={() => HandleAnimeitonEnd()}
      onAnimationEnd={() => HandleAnimeitonEnd()}
      className={hover ? styles.letter : ""}
    >
      {letter}
    </span>
  );
}
