import React, { useState } from "react";
import numbers from "../../../data.js";

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div>
        <button>{props.numbers}</button>
      </div>
    </>
  );
};
