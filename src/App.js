import React from "react";
import "./App.css";

import "./MyStyle.css";
import Hello from "./Hello";

function App() {
  return (
    <div>
      <h1 className="heading">Welcome To My First React App Project</h1>
      <p>
        Below I'm Passing My name and age using props through my costum
        component
      </p>
      <Hello name="Jawad Khan" age={45 - 22}></Hello>
      <hr></hr>
      <ol>
        <li>
          <a href="https://github.com/jvad/Project02.git">My Repository</a>
        </li>
        <li>
          <a href="https://www.facebook.com/jvadii">Contact Me</a>
        </li>
      </ol>
      <img
        src="https://images.unsplash.com/photo-1590611936760-eeb9bc598548?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
        height="300px"
        width="500px"
        alt="Girl Wearing A Mask"
      />
    </div>
  );
}

export default App;
