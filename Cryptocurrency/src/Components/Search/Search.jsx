import styles from "./Search.module.css";
import { FcSearch } from "react-icons/fc";
import { useState } from "react";

const Search = ({ searchValuefn }) => {
  const [search, setSearch] = useState(""); // State for storing search input

  const submitFn = (e) => {
    e.preventDefault();
    if (!search) return; // If search input is empty, do nothing

    searchValuefn(search); // Call the passed function with search value
  };

  return (
    <div className={styles.searchStyle}>
      <form action="#" onSubmit={submitFn}>
        <div>
          <div className={styles.searchIconStyle}>
            <FcSearch className={styles.searchIcon} />
          </div>
          <label htmlFor="search">
            <input
              type="search"
              name="search"
              className={styles.searchedValue}
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)} // Update search state on input change
            />
          </label>
          <button type="submit">Search Coin</button>
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default Search;
