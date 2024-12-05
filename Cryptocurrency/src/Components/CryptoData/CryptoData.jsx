import { rectSortingStrategy  , SortableContext } from "@dnd-kit/sortable";
import CryptoList from "../Crypto-List/CryptoList";
import styles from "./CryptoData.module.css";

const CryptoData = ({ cryptoData }) => {
  return (
    <div className={styles.cryptoContainer}>
      <SortableContext items={cryptoData} strategy={rectSortingStrategy  }>
      {cryptoData.map((data) => {
        return (
          <CryptoList 
            key={data.id}
            id={data.id}
            symbol={data.symbol}
            name={data.name}
            image={data.image}
            price={data.current_price}
          />
        );
      })}
      </SortableContext>
    </div>
  );
};
//
export default CryptoData;
