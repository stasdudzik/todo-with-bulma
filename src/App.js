import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="title is-1">Don't forget about me!</h1>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
