import { useSortable } from "@dnd-kit/sortable";
import styles from "./CryptoList.module.css";
import { CSS } from "@dnd-kit/utilities";

const CryptoList = ({ id, symbol, name, image, price }) => {
  // useSortable hook for drag-and-drop feature
  let { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  // Set style for the drag-and-drop transformation
  const style = {
    transition, // Smooth transition
    transform: CSS.Transform.toString(transform), // Convert the transform object to a CSS string
  };

  return (
    <div
      className={styles.cryptoCard}
      {...attributes}
      {...listeners}
      ref={setNodeRef}
      style={style}
    >
      {/* // Assigning values to each crypto card */}
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{symbol}</h3>
      <h3>{price}</h3>
    </div>
  );
};

export default CryptoList;
