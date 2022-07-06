import React, { useState, useEffect } from "react";

import FormUser from "./FormUser";
import shortid from "shortid";

function Tabla(props) {
  const [tabla, setTabla] = useState([]);
  const [newItem, setNewItem] = useState({});

  useEffect(() => {
    let item = { ...newItem, edit: false, status: 2 }; // async ( success or fail )
    updateDatabaseItem(item).then(setTabla(findAndReplaceItem(item)));
  }, [newItem]);

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
        setTabla(datos);
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

  const updateDatabaseItem = (item) => {
    return new Promise((resolv, reject) => {
      fetch("http://localhost:5000/updateUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: item }),
      });
    });
  };

  const findAndReplaceItem = (item) => {
    let newItem = item;
    let newTabla = tabla.map((it) => {
      if (it.id === item.id) {
        return newItem;
      }
      return it;
    });
    return newTabla;
  };

  const handlClickEdit = (item) => {
    console.log(item);
    let newItem = { ...item, edit: true }; // copia item a un objeto nuevo y le pone lo que modifico
    // ahora tengo reemplazar dentro del vector de items el viejo con el nuevo
    setTabla(findAndReplaceItem(newItem));
  };

  /*
 { date: "2022-06-29T20:44:15.316Z"
edit: false
email: "rober@p.com"
hash: "52eaa9eec8614e1ea0bd9a9c318f5eda"
id: 6
name: "Roberto"
passwd: "efrerere"
status: 1}
  */

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>passwod</th>
          <th>email</th>
          <th>fecha alta</th>
          <th>status</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {tabla.map((each) => (
          <tr key={shortid.generate()}>
            {each.edit && (
              <td key={shortid.generate()}>
                <FormUser user={each} setNewItem={setNewItem} />
              </td>
            )}

            {!each.edit && (
              <>
                <td key={shortid.generate()}>{each.name} </td>
                <td key={shortid.generate()}>{each.passwd}</td>
                <td key={shortid.generate()}>{each.email}</td>
                <td key={shortid.generate()}>{each.date}</td>
                <td key={shortid.generate()}>{each.status}</td>
              </>
            )}
            <td key={shortid.generate()}>
              <button
                onClick={(ev) => {
                  handlClickEdit(each);
                }}
              >
                Edit
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}

export default Tabla;
