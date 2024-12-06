import CryptoData from "./Components/CryptoData/CryptoData";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "./Components/Pagination/Pagination";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

const App = () => {
  let [crypto, setCrypto] = useState([]); //Store the fetched cryptocurrency data
  let [currentPage, setCurrentPage] = useState(1); // Track the current page for pagination
  let [itemsPerPage, setItemsPerPage] = useState(9); // Track the items per page for pagination
  let [cryptonite, setcryptonite] = useState([]); // State to store the paginated data for display
  let [loading, setLoading] = useState(true); // State to track loading


  // Fetch API data
  useEffect(() => {
    async function fetchCrypto() {
      try {
        let response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        setCrypto(response.data);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.log(error);
        setLoading(false); //Stop loading, If Error
      }
    }
    fetchCrypto();
  }, []);

  // Pagination
  function paginate(updatePage) {
    setCurrentPage(updatePage);
  }

  // Search
  function searchValuefn(searchedValue) {
    setcryptonite((cryptonite) => {
      return crypto.filter((coin) =>
        coin.name.toLowerCase().includes(searchedValue.toLowerCase())
      );
    });
  }

  // Update cryptonite for pagination based on current page and items per page
  useEffect(() => {
    let start = (currentPage - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    setcryptonite(crypto.slice(start, end));
  }, [crypto, currentPage, itemsPerPage]);

  // Set up drag-and-drop sensors
  let sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // Handle drag-and-drop logic
  function handleDragEnd(event) {
    let { active, over } = event;
    if (active.id === over.id) return;

    setcryptonite((cryptonite) => {
      let startIndex = position(active.id);
      let endIndex = position(over.id);
      return arrayMove(cryptonite, startIndex, endIndex);
    });
  }

  // Find the index of the dragged item
  function position(id) {
    return cryptonite.findIndex((crypt) => crypt.id === id);
  }

  return (
    <div className="container">
      <Navbar searchValuefn={searchValuefn} />
      {loading ? <div className="loading">Loading...</div> : null }  {/* // Show loading indicator if loading is true  */}
      <DndContext
        collisionDetection={closestCorners} // collisionDetection defines how items interact during drag (move to closest)
        sensors={sensors} // sensors define the input methods for dragging
        onDragEnd={handleDragEnd} // onDragEnd handles the logic when the dragging ends
      >
        <CryptoData cryptoData={cryptonite} />
      </DndContext>

      <Pagination                    //For Pagination
        paginate={paginate}
        dataLength={crypto.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default App;
