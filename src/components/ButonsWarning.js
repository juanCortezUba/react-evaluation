import React from "react";
import { handlePlus, handleMinus } from "./hooks";

function ButonsWarning({ contador, setContador, showWarnig }) {
  return (
    <div>
      <p>{contador}</p>
      <button
        onClick={() => {
          handlePlus(contador, setContador);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          handleMinus(contador, setContador);
        }}
      >
        -
      </button>
      {showWarnig && <h1>Alcanzó el límite</h1>}
    </div>
    
  );
}

export default ButonsWarning;
