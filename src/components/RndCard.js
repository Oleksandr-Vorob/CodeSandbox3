import Card from "./Card";
import { useState } from "react";

let val = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let pic = ["♠", "♦", "♣", "♥"];

let newCards = [];

export default function RndCard() {
  const [newcard, setnewcard] = useState(newCards);

  const clearCards = () => {
    setnewcard([]);
  };

  const add = () => {
    let randV = Math.floor(Math.random() * val.length);
    let randP = Math.floor(Math.random() * pic.length);
    setnewcard([...newcard, { value: val[randV], pict: pic[randP] }]);
  };
  return (
    <>
      <button onClick={add}>ADD CARD</button>
      <button onClick={clearCards}>Clear added cards</button>
      <Card cards={newcard} />
    </>
  );
}
