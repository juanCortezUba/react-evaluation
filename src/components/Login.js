import React, { useState } from "react";
import shortid from "shortid";
const ERRORES = ["error: Usuario debe tener al menos 8 chards", "error passwd"];
const ERROR_USER = 0;
const ERROR_PASSW = 1;
function Login({ setCreds }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [errores, setErrores] = useState([]);

  const handleSubmit = (ev) => {
    console.log(ev);
    ev.preventDefault();
  };

  const seterErrorWithTimer = (elem) => {
    setErrores([...errores, elem]);
    setTimeout(function () {
      setErrores([]);
    }, 2000);
  };
  const onDeletError = (item) => {
    setErrores([]);
  };
  function ListaErrores({ lista }) {
    return (
      <div>
        <ul>
          {lista.map((item) => (
            <div className="d-flex direction-row">
              <li key={shortid.generate()} style={{ color: "red" }}>
                {item}
              </li>
              <button
                onClick={(ev) => {
                  onDeletError(item);
                }}
              >
                x
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
  const sendCredsToSever = async () => {
    /* llamada api rest */
    let data = await fetch("http://localhost:5000/api/user/setcreds", {
      method: "POST", // GET , PUT , DELETE ...
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ creds: { user, password } }),
    });
    let result = await data.json();
    console.log(` message:${result.message }`);  
    if ( result.message ==="ok") {
      console.log("en el ok ");
      localStorage.setItem('creds', JSON.stringify({ user, password }))
      setCreds({ user, password });
    } else {
      // ERROR
    }
    if ((result.code = 290)) {
      setCreds(null);
    }
  };

  const handleOk = (ev) => {
    console.log(ev);
    // funcion que enviaria al server para verif
    sendCredsToSever();
    /*
    if (password.length < 6)
      return seterErrorWithTimer(
        "error: Password  debe tener al menos 4 chards"
      );

    if (user.length < 8) {
      seterErrorWithTimer("error: Usuario debe tener al menos 8 chards");
      return;
    }

    // guardamos en el localStorage para chache 
    localStorage.setItem(
      "creds",
      JSON.stringify({ user, password, hash: "rwerwery0600xxxxsfsldlñglñdf" })
    );
     // cambiamos la prop de App 
    setCreds({ user, password });
    */
  };
  return (
    <div className="container">
      {errores.length > 0 && <ListaErrores lista={errores} />}
      <h1>Login User</h1>
      <form
        className="form"
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
      >
        <div className="form-control mb-3">
          <label htmlFor="exampleInputEmail1" className="htmlFform-label">
            Email address
          </label>
          <input
            type="email"
            className="htmlFform-control ms-2"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user}
            onChange={(ev) => setUser(ev.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="form-control  mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={(ev) => {
            handleOk(ev);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
