import React from "react";

export default (props) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div
      style={{ textDecoration: props.todo.complete ? "line-through" : "none" }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button>x</button>
  </div>
);