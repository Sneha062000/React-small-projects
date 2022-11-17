import React from "react";
import { Link } from "react-router-dom";

const Dashboard=()=>{
  return (
    <>
      <h1 className="container">welcome sneha</h1>
      <Link to="/">
        <button className="pri-button">Log out</button>
      </Link>
    </>
  );
}
export default Dashboard
