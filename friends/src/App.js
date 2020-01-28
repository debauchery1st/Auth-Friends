import React, { useState } from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import Signin from "./components/Signin";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";
import { getWithAuth } from "./utils/axiosWithAuth";

import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    setShowLogin(false);
  };
  const handleLogout = () => {
    setShowLogin(true);
    return <Redirect to="/" />;
  };
  return (
    <div className="App">
      <header>
        <nav className="Menu">
          <NavLink className="MenuLink" to="/">
            Home
          </NavLink>
          {showLogin ? (
            <NavLink className="MenuLink" to="/signin">
              Signin
            </NavLink>
          ) : (
            <NavLink className="MenuLink" to="/signout">
              SignOut
            </NavLink>
          )}
        </nav>
      </header>
      <hr />
      <Switch>
        <PrivateRoute
          path="/friends"
          component={() => {
            handleLogin();
            return <FriendList friendsGetter={getWithAuth} />;
          }}
        />
        <Route path="/signin" component={Signin} onstart={handleLogin} />
        <Route path="/signout" component={handleLogout} />
      </Switch>
    </div>
  );
}

export default App;
