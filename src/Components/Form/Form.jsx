import { FaPlus } from "react-icons/fa";
import { useState } from "react";

import "../Form/Form.css";

const Form = ({ addItem }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="input">
        <input
          type="text"
          autoFocus
          id="addItem"
          placeholder="what to do...."
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" aria-label="Add Item">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};
export default Form;
