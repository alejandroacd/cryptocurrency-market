import Axios from 'axios';
import React, {useEffect, useState}  from 'react'
import './App.css'; 


function App() {
  const [value,setValue] = useState()
  useEffect(() => {
    Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setValue(res.data)
      console.log(res.data)
    })
  }, [])


  return (
    <div className="App">
      <h1>Search Criptocurrency:</h1>
 
    </div>
  );
}

export default App;
