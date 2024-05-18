import React from "react";
import { useState } from "react";

import ButtonComponent from "./components/ButtonComponent";
import Counter from "./components/Counter";

import "./App.css";

function App() {
  const [valor, setValor] = useState<number>(0);

  return (
    <div>
      <form action="" className="form">
        <label htmlFor="number">Ingresa un numero(OPCIONAL):</label>
        <input
          type="number"
          id="number"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            const val = Number(e.target.value);
            setValor(val);
          }}
        />
      </form>
      <div className="container">
        <ButtonComponent label="Sumar" onClick={() => setValor(valor + 1)} />
        <Counter value={valor} />
        <ButtonComponent label="Restar" onClick={() => setValor(valor - 1)} />
      </div>
      {valor !== 0 && (
        <ButtonComponent label="Reset" onClick={() => setValor(0)} />
      )}
    </div>
  );
}

export default App;
