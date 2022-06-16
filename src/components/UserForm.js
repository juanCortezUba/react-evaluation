import React, {useState} from "react";
/*
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    }
*/
function UserForm({ user, setUser, setNewUser }) {

const [name, setName] = useState(user.name);
const [userName, setUserName] = useState(user.username);
const [userEmail, setUserEmail] = useState(user.email);

  const onOkHandle = (ev) => {
    /* vuelvo  a mostrar el browser */
    setNewUser( { id:user.id, name, userName , userEmail });
    setUser(null);
    
  };

  const onClickSubmit = (ev) => {
    ev.preventDefault();
    setUser(null);
  };

  return (
    <div className="container mt-4">
      <h1>Edit User</h1>
      <form className="d-flex flex-column"
        onSubmit={(ev) => {
          onClickSubmit(ev);
        }}
      >
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            value={name}
            onChange={ ev => setName( ev.target.value)}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="exampleInputPassword11" className="form-label">
           User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword11"
            value={userName}
            /* copia el change del input al state */
            onChange={ ev => setUserName( ev.target.value)}
          />
        </div>

        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={userEmail}
            onChange={ ev => setUserEmail( ev.target.value)}

            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <button
          className="btn btn-primary"
          onClick={(ev) => {
            onOkHandle(ev);
          }}
        >
          Ok
        </button>
      </form>
    </div>
  );
}

export default UserForm;

/*
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    }
    */
