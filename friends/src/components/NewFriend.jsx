import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
const zfriend = {
  name: "",
  age: 0,
  email: ""
};

const NewFriend = props => {
  const [friend, setFriend] = useState({ ...zfriend });
  const handleChange = e => {
    setFriend({ ...friend, [e.currentTarget.name]: e.currentTarget.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friend)
      .then(resp => {
        setFriend({ ...zfriend });
        props.history.push("/friends");
      })
      .catch(err => console.log(err));
  };
  return (
    <form className="NewFriend" onSubmit={handleSubmit}>
      <div className="hDiv">
        name:{" "}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={friend.name}
          onChange={handleChange}
        />
      </div>
      <div className="hDiv">
        age:{" "}
        <input
          type="number"
          name="age"
          value={friend.age}
          onChange={handleChange}
        />
      </div>
      <div className="hDiv">
        email:{" "}
        <input
          className="Input"
          type="email"
          name="email"
          placeholder="Email"
          value={friend.email}
          onChange={handleChange}
        />
      </div>
      <button className="AddNewFriend">Add</button>
    </form>
  );
};

export default NewFriend;
