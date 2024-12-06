import styles from "./Navbar.module.css";
import Search from "../Search/Search";

const Navbar = ({ searchValuefn }) => {
  return (
    <div className={styles.nav}>
      {/* Click on the title redirects to the homepage */}
      <h1 onClick={() => (window.location.href = "../../index/html")}>
        Crypto-World
      </h1>
      {/* Passing searchValuefn to Search component for search functionality */}
      <Search searchValuefn={searchValuefn} />
    </div>
  );
};

export default Navbar;
