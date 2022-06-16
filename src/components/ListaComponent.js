import React from "react";
import ListaCard from "./ListaCard";
import "../components/card.css";

function ListaComponent({ lista, offset, setOffset,setMegusta }) {
  return (
    <div>
      <ul className="ul-card">
        {lista.map((item) => (
          <li key={item.char_id}>
            <div classname="container">
              <ListaCard item={item} setMegusta={setMegusta}/>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={(ev) => setOffset(offset - 10)}>anterior</button>
        <button onClick={(ev) => setOffset(offset + 10)}>siguiente</button>
      </div>
    </div>
  );
}

export default ListaComponent;
