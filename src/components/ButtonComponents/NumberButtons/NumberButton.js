import React, { useState } from "react";
import numbers from "../../../data.js";

const NumberButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      
      <div>
        {props.number === "0" ? (
          <button name="zero">{props.number}</button>  
        ) : (
        <button class="number-button">{props.number}</button>
        )}
      </div>
    </>
  );
};

export default NumberButton; 