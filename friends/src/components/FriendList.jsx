import React, { useState, useEffect } from "react";
import Friend from "./Friend";

const FriendList = ({ friendsGetter }) => {
  const [state, setState] = useState({
    friends: [],
    init: false
  });
  useEffect(() => {
    const onData = res => setState({ ...state, friends: [...res.data] });
    const onErr = err => console.log(err);
    !state.init &&
      setState({ ...state, init: true }) && friendsGetter(onData, onErr);
  }, [friendsGetter, state]);

  console.log("FriendList");

  friendsGetter();
  return (
    <span className="Friends">
      {state.friends.map(friendProps => (
        <Friend {...friendProps} />
      ))}
    </span>
  );
};

export default FriendList;
