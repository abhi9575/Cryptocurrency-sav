import CryptoData from "./Components/CryptoData/CryptoData"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import axios from 'axios';
import { useEffect, useState } from "react"
import Pagination from "./Components/Pagination/Pagination";
import {closestCorners, DndContext, KeyboardSensor, PointerSensor, TouchSensor, useSensor, useSensors} from '@dnd-kit/core';
import {
  arrayMove,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';

const App = () => {

  let [crypto, setCrypto] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [itemPerPage, setItemPerPage] = useState(9);
  let [cryptonite, setcryptonite] = useState([]);


  useEffect(()=>{
    async function fetchCrypto(){
      try {
        let response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
        setCrypto(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCrypto()
  },[])

  //Pagination
  function paginate(updatePage){
    setCurrentPage(updatePage)
  }

 
  
  //Drag & Drop
useEffect(()=>{
   let start = (currentPage -1 ) * itemPerPage;
  let end = start + itemPerPage;
  setcryptonite(crypto.slice(start, end));
},[crypto, currentPage,itemPerPage])

   let sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor,{
      coordinateGetter: sortableKeyboardCoordinates
    })
   )
   
   function handleDragEnd(event){
    let {active , over} = event;
    if(active.id === over.id) return;

    setcryptonite((cryptonite)=>{
     let startIndex = position(active.id);
     let endIndex = position(over.id);
     return arrayMove(cryptonite, startIndex, endIndex)
    })
   }

  function position(id){
  return cryptonite.findIndex((crypt)=> crypt.id === id);
   }

  return (
    <div className="container">
      <Navbar />
      <Pagination paginate={paginate} dataLength={crypto.length} itemPerPage={itemPerPage} />
      <DndContext collisionDetection={closestCorners} sensors={sensors} onDragEnd={handleDragEnd}
>         
      <CryptoData cryptoData={cryptonite} />
      </DndContext>
    </div>
  )
}

export default App