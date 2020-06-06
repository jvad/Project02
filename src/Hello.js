import React from "react";
import "./App.css";
import "./MyStyle.css";

function Hello(props) {
  return (
    <div className="hello">
      Hello {props.name} You are {props.age} years old
    </div>
  );
}

export default Hello;
