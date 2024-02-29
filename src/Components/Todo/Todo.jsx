import { FaTrashAlt } from "react-icons/fa";
import "../Todo/Todo.css";
const Todo = ({ items, handleCheck, handleDelete }) => {
  return (
    <div className="todos">
      {items.length ? (
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

              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <div className="right">
                <FaTrashAlt
                  role="button"
                  tabIndex="0"
                  onClick={() => handleDelete(item.id)}
                  aria-label={`Delete ${item.item}`}
                />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem", fontSize: "30px" }} className="empty">
          YOUR TO-DO'S ARE EMPTY
        </p>
      )}
    </div>
  );
};
export default Todo;
