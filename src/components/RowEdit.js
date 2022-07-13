import React, { useState } from "react";
import { NavItem } from "react-bootstrap";
// {name:: '', passw:''}
function RowEdit({
  val,
  it,
  fEdit,
  resetEdit,
  findAndReplaceItem,
  setEdit,
  edit,
}) {
  const [valor, setValue] = useState(it[val]);

  //  console.log(JSON.stringify(props))
  const fr = () => {
    let item = (it[val] = valor);
    findAndReplaceItem(item);
  };
  return (
    <div>
      {it.edit && val == edit ? (
        <form
          onSubmit={(e) => {
            console.log("submit");
            e.preventDefault();
            fr();
            resetEdit();
          }}
        >
          <input
            value={valor}
            onChange={(ev) => {
              setValue(ev.target.value);
            }}
          />
        </form>
      ) : (
        <p
          onClick={(ev) => {
            setEdit(val);
            fEdit(it);
          }}
        >
          {" "}
          {valor}
        </p>
      )}
    </div>
  );
}

export default RowEdit;
