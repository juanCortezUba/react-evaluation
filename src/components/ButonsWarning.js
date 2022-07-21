import React from "react";
import { handlePlus, handleMinus } from "./hooks";
import useContador from "./Hooks/useContador";

function ButonsWarning() {
  const {
    contador,
    showWarning,
    incrementarContador,
    decrementarContador,
  } = useContador(0);

  return (
    <div>
      <p>{contador}</p>
      <button
        onClick={() => {
          incrementarContador();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          decrementarContador();
        }}
      >
        -
      </button>
      {showWarning && <h1>Alcanzó el límite</h1>}
    </div>
  );
}

export default ButonsWarning;
