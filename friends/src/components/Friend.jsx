import React from "react";
// todo : style this
const Friend = ({ name, age, email }) => {
  return (
    <ul>
      <li>name: {name}</li>
      <li>age: {age}</li>
      <li>email: {email}</li>
    </ul>
  );
};

export default Friend;
