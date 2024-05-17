import React from "react";
import { useState } from "react";

import ButtonComponent from "./components/ButtonComponent";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  const [valor, setValor] = useState<number>(0);

  return (
    <div>
      <div className="container">
        <ButtonComponent
          label="Sumar"
          onClick={() => setValor(valor + 1)}
        ></ButtonComponent>
        <Counter value={valor}></Counter>
        <ButtonComponent
          label="Restar"
          onClick={() => setValor(valor - 1)}
        ></ButtonComponent>
      </div>
      <ButtonComponent
        label="Reset"
        onClick={() => setValor(0)}
      ></ButtonComponent>
    </div>
  );
}

export default App;
