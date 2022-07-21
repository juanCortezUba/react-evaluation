import { useState, useEffect } from "react";

const MAX_CONTADOR = 10;

export default function useContador(initValue) {
  const [contador, setContador] = useState(initValue);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (contador > MAX_CONTADOR) {
      setShowWarning(true);
    }
  }, [contador]);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  const decrementarContador = () => {
    setContador(contador - 1);
  };

  return { contador,showWarning, incrementarContador, decrementarContador };
}
