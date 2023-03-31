import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";
import { useState, useEffect } from "react";

function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("groceryList")) || []
  );
  const [fetchErr, setFetchErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const response = await fetch(API_URL);
      //   if (!response.ok) throw Error("The data was not fetched");
      //   const listItems = await response.json();
      //   setItems(listItems);
      //   setFetchErr(null);
      // } catch (err) {
      //   setFetchErr(err.message);
      // } finally {
      //   setIsLoading(false);
      // }
      localStorage.setItem("groceryList", JSON.stringify(items));
    };
    fetchData();
    setIsLoading(false);
  }, [items]);
  const [newItem, setNewItem] = useState();

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!newItem) return;
    const addedItem = {
      id: items.length ? items[items.length - 1].id + 1 : 1,
      name: newItem,
      checked: false,
    };
    const newList = [...items, addedItem];
    setItems(newList);
    setNewItem("");

    // const postOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(addedItem),
    // };

    // const result = await apiRequest(API_URL, postOptions);
    // if (result) setFetchErr(result);
  };

  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="app">
      <Header />
      <AddItem
        handleAdd={handleAdd}
        newItem={newItem}
        setNewItem={setNewItem}
      />
      <SearchItem searchItem={searchItem} setSearchItem={setSearchItem} />
      <main className="main">
        {isLoading && <p style={{ color: "green" }}>Loading Items...</p>}
        {fetchErr && <p style={{ color: "red" }}>{`Error : ${fetchErr}`}</p>}
        {!fetchErr && !isLoading && (
          <Content
            items={items.filter((item) =>
              item.name.toLowerCase().includes(searchItem.toLowerCase())
            )}
            setItems={setItems}
            API_URL={API_URL}
            setFetchErr={setFetchErr}
          />
        )}
      </main>
      <Footer itemsLength={items.length} />
    </div>
  );
}

export default App;
