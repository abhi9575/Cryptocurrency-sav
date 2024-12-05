import styles from "./Search.module.css"
import { FcSearch } from "react-icons/fc";
import { useState } from "react";

const Search = ({searchValuefn}) => {
  let [search, setSearch] = useState("");
  
  let submitFn =(e)=>{
    e.preventDefault();
    if(!search) return;
    searchValuefn(search);
  };
  return (
    <div className={styles.searchStyle}>
      <form action="#" onSubmit={submitFn}>
        <div className={styles.searchIconStyle}>
      <FcSearch className={styles.searchIcon}/>
      </div>
      <label htmlFor="search">
      <input 
       type="search" name="search" className={styles.searchedValue} id="search" value={search}  onChange={(e)=> setSearch(e.target.value)}/>
      </label>
      <button type="submit" >Search Coin</button>
      </form>
    </div>
  )
}

export default Search