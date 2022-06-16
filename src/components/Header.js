import React, { useState, useEffect } from "react";
import ButonsWarning from "./ButonsWarning";
function Header() {
  const [valor, setValor] = useState(0);
  const [showWarnig, setShowWarning] = useState(false);

  useEffect(() => {
    setShowWarning(valor >= 10);
  }, [valor]);

  // MODEL VIEW CONTROLLER

   

  return (
    <ButonsWarning
      contador={valor}
      setContador={setValor}
      showWarnig={showWarnig}
    />
  );
}

export default Header;
