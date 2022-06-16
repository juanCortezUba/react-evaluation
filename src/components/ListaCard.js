import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

/*

appearance: (5) [1, 2, 3, 4, 5]
better_call_saul_appearance: []
birthday: "09-07-1958"
category: "Breaking Bad"
char_id: 1
img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
name: "Walter White"
nickname: "Heisenberg"
occupation: (2) ['High School Chemistry Teacher', 'Meth King Pin']
portrayed: "Bryan Cranston"
*/

function ListaCard({ item , setMegusta}) {
  const {
    birthday,
    name,
    occupation,
    category,
    img,
    portrayed,
    megusta
   
  } = item;

  const Occupation = ({ occupations }) => {
    return (
      <div>
        <ul className="list-unstyled">
          {occupations.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h2>{name}</h2>
      <p>{category}</p>
      <p>{birthday}</p>
      <Occupation occupations={occupation} />
      <div className="w-25">
        <img src={img} alt={portrayed} style={{ width: "30rem" }} />
      </div>
      <div>
        <p>Me gusta</p>
        <FontAwesomeIcon
          onClick={(ev) => {
            setMegusta(item);
          }}
          icon={faThumbsUp}
        />
        <p>{megusta}</p>
      </div>
    </div>
  );
}

export default ListaCard;
