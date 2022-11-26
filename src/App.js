import { useState } from "react";
import "./styles.css";
import Card from "./components/Card";
import RndCard from "./components/RndCard";

let val = ["6", "7", "8", "9", "10", "J", "Q", "K", "A"];
let pic = ["♠", "♦", "♣", "♥"];

export default function App() {
  const [, setcard0] = useState(val);

  const clearCards = () => {
    val = [];
    setcard0([]);
  };

  return (
    <div className="App">
      <h1>Playing cards</h1>
      <RndCard />
      <button onClick={clearCards}>Clear cards</button>
      <ol>
        {val.map((v) =>
          pic.map((p, i) => (
            <li key={i}>
              <Card cards={[{ value: v, pict: p }]} />
            </li>
          ))
        )}
      </ol>
    </div>
  );
}
