import React from "react";

function Test(props) {
  return (
    <div
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        padding: props.padding,
      }}
    >
     {props.children}
    </div>
  );
}

export default Test;
