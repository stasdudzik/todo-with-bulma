import React from "react";

export default (props) => (
  <div
    style={{
      display: "grid",
      justifyItems: "center",
      gridTemplateColumns: "4fr 1fr",
    }}
  >
    <div
      style={{ textDecoration: props.todo.complete ? "line-through" : "none" }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </div>
    <button class="button is-danger is-small" onClick={props.onDelete}>
      x
    </button>
  </div>
);
