import "./App.css";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <div className="app">
      <Header />
      <Form />
      <Todo />
    </div>
  );
}

export default App;
