import { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({dataLength, itemPerPage, paginate}) => {
  let [totalPage, setTotalPage] = useState([]);

  useEffect(()=>{  
    let pagNumber =[]

    for(let i = 1; i <= Math.ceil(dataLength/itemPerPage) ; i++ ){
      pagNumber.push(i)
     }
     setTotalPage(pagNumber)
  },[dataLength , itemPerPage])
 
  return (
    <div className={styles.paginationBox}>
      {
        totalPage.map((page, index)=>{
          return <button key={index} onClick={()=>paginate(page)}>{page} </button>
        })
      }
    </div>
  )
}

export default Pagination