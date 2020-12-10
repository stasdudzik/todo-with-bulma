import React from "react";

import TodoForm from "./TodoForm";
import Todo from "./Todo";

class TodoList extends React.Component {
  state = {
    key: "xtb5$32",
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true,
  };

  componentDidMount() {
    document.title = "📝ToDoList";
    const localStorageRef = localStorage.getItem(this.state.key);
    console.log(localStorageRef);

    if (localStorageRef) {
      this.setState({ todos: JSON.parse(localStorageRef) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(this.state.key, JSON.stringify(this.state.todos));
  }

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

  handleDeleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  };

  removeAllTodoThatAreComplete = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.complete),
    });
  };

  toggleAll = () => {
    this.setState({
      todos: this.state.todos.map((todo) => ({
        ...todo,
        complete: this.state.toggleAllComplete,
      })),
      toggleAllComplete: !this.state.toggleAllComplete,
    });
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
            onDelete={() => this.handleDeleteTodo(todo.id)}
            text={todo.text}
            todo={todo}
          />
        ))}
        <div
          class="buttons mt-5"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <button
            class="button is-link is-light"
            onClick={() => this.updateTodoToShow("all")}
          >
            all
          </button>
          <button
            class="button is-link is-light"
            onClick={() => this.updateTodoToShow("active")}
          >
            active
          </button>
          <button
            class="button is-link is-light"
            onClick={() => this.updateTodoToShow("complete")}
          >
            complete
          </button>
        </div>
        <div
          class="buttons"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {this.state.todos.some((todo) => todo.complete) ? (
            <div>
              <button
                class="button is-danger"
                onClick={this.removeAllTodoThatAreComplete}
              >
                remove all complete todos
              </button>
            </div>
          ) : null}
          <div>
            <button class="button is-warning" onClick={() => this.toggleAll()}>
              toggle all: {`${this.state.toggleAllComplete}`}
            </button>
          </div>
        </div>
        <div>
          todos left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
      </div>
    );
  }
}

export default TodoList;
