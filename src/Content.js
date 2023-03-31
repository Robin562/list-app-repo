import ListItem from "./ListItem";
// import apiRequest from "./apiRequest";

const Content = ({ items, setItems, API_URL, setFetchErr }) => {
  const handleCheck = async (id) => {
    const listItems = items.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
        return item;
      } else {
        return item;
      }
    });
    setItems(listItems);
    // const myItem = listItems.filter((item) => item.id === id);
    // const updateOptions = {
    //   method: "PATCH",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({ checked: myItem[0].checked }),
    // };
    // const reqUrl = `${API_URL}/${myItem[0].id}`;
    // const result = await apiRequest(reqUrl, updateOptions);
    // if (result) setFetchErr(result);
  };
  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    // const deleteOptions = { method: "DELETE" };
    // const reqUrl = `${API_URL}/${id}`;
    // const result = await apiRequest(reqUrl, deleteOptions);
    // if (result) setFetchErr(result);
  };

  return (
    <>
      {items.length ? (
        <ul className="ul">
          {items.map((item) => (
            <ListItem
              item={item}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
              itemKey={item.id}
            />
          ))}
        </ul>
      ) : (
        "The list is empty"
      )}
    </>
  );
};

export default Content;
