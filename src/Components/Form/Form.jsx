import { FaPlus } from "react-icons/fa";
import "../Form/Form.css";

const Form = () => {
  return (
    <div>
      <form className="input">
        <input
          type="text"
          autoFocus
          id="addItem"
          placeholder="what to do...."
          required
        />
        <button type="submit" aria-label="Add Item">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};
export default Form;
