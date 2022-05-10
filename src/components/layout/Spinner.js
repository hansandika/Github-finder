import React from "react";
import spinner from "./spinner.gif";

function Spinner() {
  return (
    <>
      <img src={spinner} alt="Loading..." className="block m-auto w-25" />
    </>
  );
}

export default Spinner;
