import "./App.css";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const Container = styled.div`
  background: #2b2e39;
  margin: 0 auto;
  max-width: 600px;
  padding: 5px 5px;
  border-radius: 14px;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <header className="App-header">
        <h1 class="title is-1">Don't forget to do this!</h1>
        <TodoList />
      </header>
    </Container>
  );
}

export default App;
