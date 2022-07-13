import { isRedirect } from "node-fetch";
import React, { useState } from "react";

function FormUser({ user, setNewItem }) {
  const [item, setItem] = useState({
    ...user,
    date: user.date === null ? new Date() : user.date,
  });

  const handleSubmit = (ev) => {
    console.log("handleSubmit");
    ev.preventDefault();
    setNewItem(item);
  };

  const itemChanged = (item) => {
    setItem(item);
  };
  return (
    <div>
      <form
        onSubmit={(ev) => {
          handleSubmit(ev);
        }}
      >
        <input
          value={item.name}
          onChange={(ev) => setItem({ ...item, name: ev.target.value })}
        />
        <input
          value={item.passwd}
          onChange={(ev) => setItem({ ...item, passwd: ev.target.value })}
        />
        <input
          value={item.email}
          onChange={(ev) => setItem({ ...item, email: ev.target.value })}
        />
        <input
          value={item.date}
          onChange={(ev) => setItem({ ...item, date: ev.target.value })}
        />
        <button type="submit">Ok</button>
      </form>
    </div>
  );
}
export default FormUser;
