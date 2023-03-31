const SearchItem = ({ searchItem, setSearchItem }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="searchItem">Search Item : </label>
      <input
        type="text"
        placeholder="search"
        htmlFor="searchItem"
        value={searchItem}
        onChange={(e) => {
          setSearchItem(e.target.value);
        }}
      ></input>
    </form>
  );
};

export default SearchItem;
