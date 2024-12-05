import styles from "./Navbar.module.css";
import Search from "../Search/Search";

const Navbar = ({searchValuefn}) => {
   


  return (
    <div className={styles.nav}>
      <h1 onClick={()=>window.location.href = "../../index/html"}>Crypto-World</h1>
      <Search searchValuefn={searchValuefn}/>
      
    </div>
  )
}

export default Navbar