import React from "react";
import { NavLink, Route } from "react-router-dom";
import Signin from "./components/Signin";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav className="Menu">
          <NavLink className="MenuLink" to="/">
            Home
          </NavLink>
          <NavLink className="MenuLink" to="/signin">
            Signin
          </NavLink>
        </nav>
      </header>
      <hr />
      <Route exact path="/signin" component={Signin} />
    </div>
  );
}

export default App;
