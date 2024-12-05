import CryptoList from "../Crypto-List/CryptoList";
import styles from "./CryptoData.module.css";

const CryptoData = ({ cryptoData }) => {
  console.log(cryptoData);
  return (
    <div className={styles.cryptoContainer}>
      {cryptoData.map((data) => {
        return (
          <CryptoList
            key={data.id}
            symbol={data.symbol}
            name={data.name}
            image={data.image}
            price={data.current_price}
          />
        );
      })}
    </div>
  );
};
//
export default CryptoData;
