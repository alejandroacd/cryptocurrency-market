import Axios from 'axios';
import React, {useEffect, useState}  from 'react'
import './App.css'; 


function App() {
  const [value,setValue] = useState();



  useEffect(() => {
    Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res => {
      setValue(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])


  return (
    <div className="App">
      <h1>Cryptocurrency Data:</h1>
      <div className='input-container'>
        <form>
          <input className='crypto_name' placeholder="Search your currency" type="text"></input>
        </form>
      </div>
 
    </div>
  );
}

export default App;
