import React, { useEffect, useState } from "react";
import shortid from "shortid";
import UserForm from "./UserForm";

function TablaUsers() {
  const [lista, setLista] = useState([]);
  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState({});
  const getData = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await result.json();
    setLista(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const updateData = (item) => {
    /* actualiza el iten editado con los datos del formulario de edicion 
       y setea la lista browser con ese registro modificado */
    setNewUser(item);
    let newList = lista.map((registro) => {
      if (registro.id === item.id) {
        /* es el que edite */

        return {
          ...registro,
          name: item.name,
          username: item.userName,
          email: item.userEmail,
        };
      }
      /* devuelvo sin tocar los que no edite */
      return registro;
    });
    setLista(newList);
  };
  const removeId = async (id) => {
    /* ejemplo de api para eliminar en el server el id */
    let result = await fetch(
      "https://jsonplaceholder.typicode.com/removeusers?id=id"
    );
    if (result.code === 200) {
      getData();
    }
  };

  const onClickDelete = (id) => {
    console.log(id);
    //  removeId( id);
    setLista(lista.filter((item) => item.id !== id));
  };

  const onClickModify = (item) => {
    setUser(item);
  };

  return (
    <div>
      {user !== null ? (
        <UserForm user={user} setUser={setUser} setNewUser={updateData} />
      ) : null}

      {user === null ? (
        <div>
          <button
            className="btn btn-primary mt-2"
            onClick={(ev) => setUser({ name: "", username: "", email: "" })}
          >
            Agregar nuevo usuario
          </button>
          <table className="table table-secondary table-striped table-hover  mt-2">
            <thead>
              <tr>
                <th>nombre</th>
                <th>usuario</th>
                <th>email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {lista.map((item) => (
                <tr key={shortid.generate()}>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <button
                      className="btn   btn-danger  mr-1"
                      onClick={(ev) => {
                        onClickDelete(item.id);
                      }}
                    >
                      Delete
                    </button>

                    <button
                      className="btn   btn-primary  ms-3"
                      onClick={(ev) => {
                        onClickModify(item);
                      }}
                    >
                      Modify
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
    </div>
  );
}

export default TablaUsers;

/*{
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    }
    */
