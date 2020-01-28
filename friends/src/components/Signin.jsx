import React, { useState } from "react";
import axios from "axios";

const Signin = props => {
  const initCreds = {
    username: "",
    password: ""
  };
  const [signError, setSignError] = useState();
  const [creds, setCreds] = useState({ ...initCreds });
  const handleChange = e => {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", creds)
      .then(res => {
        console.log(res);
        setSignError("");
        setCreds({ ...initCreds });
        localStorage.setItem("token", res.data.payload);
      })
      .catch(err => {
        console.log(err.response);
        setSignError(err.response.data.error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      {signError && <div className="Error">{signError}</div>}
      <input
        type="username"
        name="username"
        placeholder="Username"
        value={creds.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={creds.password}
        onChange={handleChange}
      />
      <button type="submit">Sign in</button>
    </form>
  );
};

export default Signin;
