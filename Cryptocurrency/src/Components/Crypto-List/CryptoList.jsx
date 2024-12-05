import styles from "./CryptoList.module.css";

const CryptoList = ({ symbol, name, image, price}) => {
  return (
       <div className={styles.cryptoCard}>
        
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h3>{symbol}</h3>
            <h3>{price}</h3>
          </div>
  )
}
// 
export default CryptoList;


