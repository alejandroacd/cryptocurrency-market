import React from 'react';
import './Currency.css'
const Currency = ({cryptoName,symbol,image,price,volume, priceChange,marketcap}) => {
    return (
        <div className="currency_container">
            
                <img src={image} alt="crypto" />
                <h1>{cryptoName}</h1>
                <p className="currency_symbol">{symbol.toUpperCase()}</p>
           
            
            <p className="currency_price">{price}$</p>
            <p className="currency_volume">{volume.toLocaleString()}$</p>
            {priceChange < 0 ? 
            <p className="currency_percent red">{priceChange.toFixed(2)}%</p>
            :
            <p className="currency_percent green">{priceChange.toFixed(2)}% </p>
             }
             <p className="currency_marketcap">Market Cap: {marketcap.toLocaleString()}$ </p>
             
        </div>
    )
}

export default Currency