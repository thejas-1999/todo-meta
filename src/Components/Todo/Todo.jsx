import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
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

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoplist", JSON.stringify(listItems));
  };

  return (
    <div className="todos">
      <ul>
        {items.map((item) => (
          <li className="todo" key={item.id}>
            <div className="left">
              <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
              />
            </div>

            <label htmlFor="" onDoubleClick={() => handleCheck(item.id)}>
              {item.item}
            </label>
            <div className="right">
              <FaTrashAlt role="button" tabIndex="0" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Todo;
