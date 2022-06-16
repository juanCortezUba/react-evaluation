import React, { useState, useEffect } from "react";

import ListaComponent from "../components/ListaComponent";
function BreakingBadList({ color, size, valor }) {
  const [lista, setLista] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);

  const setMegusta = (quien) => {
    const newData = lista.map((item) => {
      if (item.char_id === quien.char_id) {
        return { ...item, megusta: quien.megusta + 1 };
      }
      return item;
    });
    setLista(newData);
  };

  const processLista = (data) => {
    const newData = data.map((item) => ({ ...item, megusta: 0 }));
    setLista(newData);
  };

  useEffect(() => {
    const initilizeList = async (url) => {
      /* armo la query http */
      let uri = new URL(url);
      uri.searchParams.append("limit", limit);
      uri.searchParams.append("offset", offset);

      /* options  */

      let options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      };

      /*  hace el pedido */

      try {
        let result = await fetch(uri, options);
        let data = await result.json();
        console.log(data);
        processLista(data);
      } catch (error) {
        console.error(error);
      }
    };

    initilizeList("https://breakingbadapi.com/api/characters");
  }, [offset, limit]);

  return (
    <div className="App">
      <ListaComponent
        lista={lista}
        offset={offset}
        setOffset={setOffset}
        setMegusta={setMegusta}
      />
    </div>
  );
}

export default BreakingBadList ;
