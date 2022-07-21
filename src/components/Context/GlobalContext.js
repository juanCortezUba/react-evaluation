import React, { useState, useEffect, createContext } from "react";

const GlobalContext = createContext({});

export function GlobalContextProvider({ children, credenciales }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    /* ejecuta cuando se carga el componet */
    getData();
  }, []);

  const getData = async () => {
    console.log("getData");
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await result.json();
    console.log(data);
    setData(data);
  };

  return (
    <GlobalContext.Provider value={{ data }}>{children}</GlobalContext.Provider>
  );
}

export default GlobalContext;
