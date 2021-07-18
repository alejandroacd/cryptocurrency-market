import Axios from 'axios';
import React, {useEffect, useState}  from 'react'
import './App.css'; 


function App() {
  const [values,setValue] = useState([]);
  const [search,setSearch] = useState('')


  useEffect(() => {
    Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(resp => {
      setValue(resp.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const finalValues = values.filter(value => value.name.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="App">
      <h1>Cryptocurrency Data:</h1>
      <div className='input-container'>
        <form>
          <input  className='crypto_name' placeholder="Search a currency" type="text" onChange={handleChange}></input>
        </form>
      </div>
      {finalValues.map(value => {
        return(
          
        )
      })}
    
    </div>
  );
}

export default App;
