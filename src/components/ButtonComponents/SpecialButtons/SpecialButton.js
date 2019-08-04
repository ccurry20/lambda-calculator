import React from "react";

const SpecialButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <div>
        <button class='special-button'>{props.special}</button>
      </div>
    </>
  );
};
export default SpecialButton;