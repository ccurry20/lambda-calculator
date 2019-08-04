import React from "react";

const OperatorButton = ({ operator: {char, value}}) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div>
        <button class ='operator-button'>{char}</button>
      </div>
    </>
  );
};

export default OperatorButton; 