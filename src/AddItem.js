import { useRef } from "react";

const AddItem = ({ handleAdd, newItem, setNewItem }) => {
  const inputRef = useRef();
  return (
    <form>
      <label>AddItem : </label>
      <input
        autoFocus
        ref={inputRef}
        type="text"
        required
        placeholder="add item"
        value={newItem}
        onChange={(e) => {
          setNewItem(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={(e) => {
          handleAdd(e);
          inputRef.current.focus();
        }}
      >
        +
      </button>
    </form>
  );
};

export default AddItem;
