import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 3fr 1fr;
`;

const Todo = styled.div`
  background: #343744;
  border-radius: 10px;
  padding: 4px;
  margin-bottom: 4px;
`;

export default (props) => (
  <Container>
    <Todo
      style={{
        textDecoration: props.todo.complete ? "line-through" : "none",
        color: props.todo.complete ? "#f14668" : "white",
      }}
      onClick={props.toggleComplete}
    >
      {props.todo.text}
    </Todo>
    <button class="button is-danger is-small" onClick={props.onDelete}>
      &#10799;
    </button>
  </Container>
);
