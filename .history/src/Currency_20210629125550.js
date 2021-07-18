import React from 'react';

const Currency = ({cryptoName,symbol,image,price,volume, priceChange}) => {
    return (
        <div className="currency_container">
            <div className="currency">
                <img src={image} alt="crypto" />
                <h1>{cryptoName}</h1>
                <p className="currency_symbol">{symbol}</p>
            </div>
            <div className="currency_data"></div>
            <p className="currency_price">{price}$</p>
            <p className="currency_volume">{volume.toLocaleString()}$</p>
            {priceChange < 0 ? 
            <p className="currency_percent red">{priceChange.toFixed(2)}%</p>
            :
            <p className="currency_percent green"></p>
             }
        </div>
    )
}

export default Currency