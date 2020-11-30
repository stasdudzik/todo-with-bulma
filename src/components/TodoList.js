import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
/*
Todo Model Viever Controller
1. add Todo
2. display todos
3. cross off todo
4.show number of active todos
5.filter all/active/complete
6.delete todo
7.delete all complete
a) only show if atleast one is complete
8 button to toggl all on/off
*/

class TodoList extends React.Component {
  state = {
    todos: [],
    todoToShow: "all",
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  updateTodoToShow = (s) => {
    this.setState({ todoToShow: s });
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            text={todo.text}
            todo={todo}
          />
        ))}
        <div>
          todos left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <button onClick={() => this.updateTodoToShow("all")}>all</button>
        <button onClick={() => this.updateTodoToShow("active")}>active</button>
        <button onClick={() => this.updateTodoToShow("complete")}>
          complete
        </button>
      </div>
    );
  }
}

export default TodoList;
