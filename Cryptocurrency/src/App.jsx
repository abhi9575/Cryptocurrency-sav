import CryptoData from "./Components/CryptoData/CryptoData"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
import axios from 'axios';
import { useEffect, useState } from "react"

const App = () => {

  let [crypto, setCrypto] = useState([])

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
  
  return (
    <div className="container">
      <Navbar />
      <CryptoData cryptoData={crypto} />
    </div>
  )
}

export default App