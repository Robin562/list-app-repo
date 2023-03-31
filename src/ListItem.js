import { FaTrash } from "react-icons/fa";

const ListItem = ({ item, handleCheck, handleDelete, itemKey }) => {
  return (
    <li key={itemKey}>
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => {
          handleCheck(item.id);
        }}
      ></input>
      <label
        style={
          item.checked === true ? { textDecoration: "line-through" } : null
        }
      >
        {item.name}
      </label>
      <FaTrash
        role={"button"}
        style={{ cursor: "pointer" }}
        onClick={() => {
          handleDelete(item.id);
        }}
      />
    </li>
  );
};

export default ListItem;
