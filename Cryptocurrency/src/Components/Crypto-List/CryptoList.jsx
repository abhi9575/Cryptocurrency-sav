import { useSortable } from "@dnd-kit/sortable";
import styles from "./CryptoList.module.css";
import { CSS } from "@dnd-kit/utilities";

const CryptoList = ({id, symbol, name, image, price}) => {

  let {attributes, listeners, setNodeRef, transform, transition} = useSortable({id});
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  return (
       <div className={styles.cryptoCard} {...attributes} {...listeners} ref={setNodeRef} style={style}> 
        
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h3>{symbol}</h3>
            <h3>{price}</h3>
          </div>
  )
}
// 
export default CryptoList;


