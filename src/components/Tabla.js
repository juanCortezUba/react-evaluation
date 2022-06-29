import React, { useState, useEffect } from "react";
import shortid from "shortid";
function Tabla(props) {
  const [tabla, setTabla] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let resp = await fetch("http://localhost:5000/getusers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ table: "user" }),
        });
        const data = await resp.json();
        console.log(data.result.rows);
        let datos = procDatos(data.result.rows);
        console.log(datos);
        setTabla(data.result.rows);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  // le agrega atributo al user edit en falso
  const procDatos = (users) => {
    console.log(users);
    let datos = users.map((user) => {
      return { ...user, edit: false };
    });

    return datos;
  };

  function FormUser({ user }) {
    return <div></div>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>passwod</th>
          <th>email</th>
          <th>fecha alta</th>
          <th>status</th>
        </tr>
      </thead>
      <tbody>
        {tabla.map((each) => (
          <tr key={shortid.generate()}>
            {each.edit && <FormUser user={each} />}
            <td key={shortid.generate()}>{each.name} </td>
            <td key={shortid.generate()}>{each.passwd}</td>
            <td key={shortid.generate()}>{each.email}</td>
            <td key={shortid.generate()}>{each.date}</td>
            <td key={shortid.generate()}>{each.status}</td>
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}

export default Tabla;
