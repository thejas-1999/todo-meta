import { useState } from "react";

import "./App.css";
import Header from "./Components/Header/Header";
import Form from "./Components/Form/Form";
import Todo from "./Components/Todo/Todo";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem(`shoplist`) || [])
  );

  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoplist", JSON.stringify(newItems));
  };

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : item;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems);
  };

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setAndSaveItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  };

  return (
    <div className="app">
      <Header />
      <Form addItem={addItem} />
      <Todo
        items={items}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
