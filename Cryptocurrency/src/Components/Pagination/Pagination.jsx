import { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

const Pagination = ({ dataLength, itemsPerPage, paginate }) => {
  let [totalPage, setTotalPage] = useState([]); //To find number of pages which needed to be displayed for pagination

  useEffect(() => {
    let pagNumber = [];

    // Calculating total pages based on dataLength and itemsPerPage
    for (let i = 1; i <= Math.ceil(dataLength / itemsPerPage); i++) {
      pagNumber.push(i);
    }
    setTotalPage(pagNumber); // Setting the total pages
  }, [dataLength, itemsPerPage]);

  return (
    <div className={styles.paginationBox}>
      {totalPage.map((page, index) => {
        return (
          <button key={index} onClick={() => paginate(page)}>
            {page}{" "}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
