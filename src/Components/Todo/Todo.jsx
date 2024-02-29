import { useState } from "react";
import "../Todo/Todo.css";
const Todo = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "item1",
    },
    {
      id: 2,
      checked: false,
      item: "item2",
    },
    {
      id: 3,
      checked: true,
      item: "item3",
    },
    {
      id: 4,
      checked: false,
      item: "item4",
    },
  ]);
  return (
    <div className="todos">
      <ul>
        {items.map((item) => (
          <li className="todo" key={item.id}>
            <div className="left">
              <input type="checkbox" checked={item.checked} />
            </div>

            <label htmlFor="">{item.item}</label>
            <div className="right">
              <button>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
