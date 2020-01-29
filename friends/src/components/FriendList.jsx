import React, { useState, useEffect } from "react";

import Friend from "./Friend";
import Spinner from "./Spinner";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendList = () => {
  const [lcycle, setLcycle] = useState(undefined);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    if (lcycle) return;
    setLcycle(1);
    console.log("...get");
    axiosWithAuth()
      .get("/friends")
      .then(response => {
        console.log(".then");
        setLcycle(2);
        setFriends(response.data);
      })
      .catch(errors => {
        setLcycle(3);
        console.log(errors);
      });
    return setLcycle(4);
  }, [lcycle]);

  return (
    <span className="Friends">
      {lcycle === 4 ? <Spinner /> : ""}
      {friends.map(friendProps => (
        <Friend key={friendProps.id} {...friendProps} />
      ))}
    </span>
  );
};

export default FriendList;
