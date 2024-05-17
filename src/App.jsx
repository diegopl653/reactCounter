import { useState } from "react";
import "./App.css";

function App() {
  const [valor, setValor] = useState(0);
  

  return (
    <>
    <div className="container">
      <button className="btn" onClick={() => setValor(valor+1)}>Sumar</button>
      <p>{valor}</p>
      <button className="btn" onClick={() => setValor(valor-1)}>Restar</button>
    </div>
      <button className="btn" onClick={() => setValor(0)}>Reset</button>
    </>
  );
}

export default App;
