import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Protected = ({ component: Component, urls, th, c, ...leftOvers }) => {
  const getWithAuth = () => {
    axiosWithAuth()
      .get(urls.get)
      .then(res => th(res.data.data))
      .catch(err => c(err));
  };
  return <Component getData={getWithAuth} {...leftOvers} />;
};

export default Protected;
