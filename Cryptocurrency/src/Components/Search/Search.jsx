import styles from "./Search.module.css";
import { FcSearch } from "react-icons/fc";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Search = ({ searchValuefn }) => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);
  const recaptchaRef = React.createRef(); // Reference for reCAPTCHA

  const submitFn = (e) => {
    e.preventDefault();
    setToggle(!toggle);
    if (!search) return; 

    const recaptchaValue = recaptchaRef.current.getValue(); // Get reCAPTCHA value

    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA!"); 
      return;
    }
    searchValuefn(search);
    console.log("reCAPTCHA success:", recaptchaValue);
    setToggle(!toggle);
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
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
        <button type="submit">Search Coin</button>
        </div>
        <div>
        {toggle ? <ReCAPTCHA
          sitekey="6Lc_qJMqAAAAAFCfC5BispsW6n5-re3xPn5DFUje"
          ref={recaptchaRef} 
        /> : null}
        </div>
      </form>
    </div>
  );
};

export default Search;
