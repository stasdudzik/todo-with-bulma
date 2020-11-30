import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Grocery List (MVC) </p>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
