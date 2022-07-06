import React, { useState } from "react";

function CRMTabla() {
  const [user, setUSer] = useState({
    name: "",
    passwd: "",
    status: 1,
    date: new Date(),
  });
  const onHandleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleClick = (ev) => {
    fetch("http://localhost:5000/newuser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((result) => result.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  
  return (
    <div className="container  w-25 mt-2">
      <h2>Users</h2>
      <form classname="form mt-5 " onSubmit={onHandleSubmit}>
        <div className="form-control">
          <label className="form-label">name</label>
          <input
            className="form-control "
            type="text"
            value={user.name}
            onChange={(ev) => {
              setUSer({ ...user, name: ev.target.value });
            }}
          />
        </div>
        <div className="form-control">
          <label className="form-control">password</label>
          <input
            className="mr-1"
            type="password"
            value={user.passwd}
            onChange={(ev) => {
              setUSer({ ...user, passwd: ev.target.value });
            }}
          />
        </div>
        <div className="form-control">
          <label className="form-control">email</label>
          <input
            className="form-control mr-1"
            type="email"
            value={user.email}
            onChange={(ev) => {
              setUSer({ ...user, email: ev.target.value });
            }}
          />
        </div>
        <div className="form-control">
          <button
            className="form-control btn btn-primary d-block"
            type="button"
            onClick={handleClick}
          >
            send
          </button>
        </div>
      </form>
      <table></table>
    </div>
  );
}

export default CRMTabla;
