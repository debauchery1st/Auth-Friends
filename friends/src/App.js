import React, { useState } from "react";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import Signin from "./components/Signin";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleLogin = () => {
    setShowLogin(false);
  };
  const handleLogout = () => {
    setShowLogin(true);
    localStorage.removeItem("token");
    return <Redirect to="/signin" />;
  };
  const ttl = window.location.pathname.replace("/", "⚛");
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
      <div className="Title">{ttl}</div>
      <Switch>
        <PrivateRoute
          path="/friends"
          component={() => {
            handleLogin();
            return <FriendList />;
          }}
        />
        <Route
          exact
          path="/"
          component={() =>
            showLogin ? <Redirect to="/signin" /> : <Redirect to="/friends" />
          }
        />
        <Route path="/signin" component={Signin} onstart={handleLogin} />
        <Route path="/signout" component={handleLogout} />
      </Switch>
    </div>
  );
}

export default App;
