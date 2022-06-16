import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import TablaUsers from "./components/TablaUsers";
import ExitComponent from "./components/ExitComponent";
import ButonsWarning from "./components/ButonsWarning";
import Login from "./components/Login";
import TablaDB from "./components/TablaDB";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import BreakingBadList from "./components/BreakingBadList";
function App({ color, size, valor }) {
  const [creds, setcreds] = useState(JSON.parse(localStorage.getItem("creds")));

  if (creds === null) {
    return <Login setCreds={setcreds} />;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav-bar navbar-dark ">
          <hr style={{ color: "white", marginTop: "14px" }} />
          <ul
            className="nav  nav-tabs bg-secundary d-flex flex-row"
            style={{
              backgroundColor: "##d9d2d2",
            }}
          >
            <li className="nav-item fw-bold ms-1">
              <Link to="/breakingBad">Breaking Bad</Link>
            </li>

            <li className="nav-item fw-bold ms-1">
              <Link to="/users">Tabla Users</Link>
            </li>
            <li className="nav-item fw-bold ms-1">
              <Link to="/tabla">Tabla DB</Link>
            </li>
            <li className="nav-item fw-bold ms-1">
              <Link to="/exit">Exit</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route
            path="breakingBad"
            element={<BreakingBadList creds={creds} />}
          />
          <Route path="users" element={<TablaUsers creds={creds} />} />
          <Route path="buttons" element={<ButonsWarning creds={creds} />} />
          <Route path="tabla" element={<TablaDB creds={creds} />} />
          <Route path="exit" element={<ExitComponent setCreds={setcreds} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
