import React, { useEffect, useState } from "react";
const { URL_BACKEND } = require("./config");

function TablaDB({ creds }) {
  const [names, setNames] = useState({ data: [] });
  const [name, setName] = useState("");
  let [isError, setError] = useState(false);

  //  console.log(URL_BACKEND);

  useEffect(() => {
    setError(true);
  }, [name,names]);

  const getName = async () => {
    try {
      let result = await fetch("http://localhost:5000/query", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: name }),
      });
      let res = await result.json();
      console.log(res);
      if(res.data.length === 0 ){
        setName("");
        return  alert("clave o user invalido");
      }else{
        return  alert("bienvenido "+name);
      }
      setNames({ data: res });
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    console.log("useEffect");
    getName();
  }, []);

  const onSubmit = (ev) => {
    ev.preventDefault();
    getName(name);
  };
  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={(ev) => {
          onSubmit(ev);
        }}
      >
        <input
          value={name}
          onChange={(ev) => {
            setName(ev.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default TablaDB;
