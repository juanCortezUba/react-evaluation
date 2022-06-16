import React, { useEffect, useState } from "react";
const { URL_BACKEND } = require("./config");

function TablaDB({ creds }) {
  let [names, setNames] = useState({ data: [] });
  let [isError, setError] = useState(false);

  console.log(URL_BACKEND);
  useEffect(() => {
    console.log(names);
  }, [names]);

  useEffect(() => {
    console.log("useEffect");
    const getName = async () => {
      try {
        let result = await fetch("http://localhost:5000/query", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: 1 }),
        });
        let data = await result.json();

        setNames(data);
      } catch (error) {
        console.log(error);
      }
    };
    getName();
  }, []);

  return (
    <div>
      {<h2>hola</h2>}
      <div>
        <ul>
          {names.data.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TablaDB;
git 