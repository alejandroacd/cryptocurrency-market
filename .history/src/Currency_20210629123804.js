import React from 'react';

const Currency = ({cryptoName,symbol,image,price,volume}) => {
    return (
        <div className="currency_container">
            <div className="currency">
                <img src={image} alt="crypto" />
                <h1>{cryptoName}</h1>
                <p className="currency_symbol">{symbol}</p>
            </div>
            <div className="currency_data"></div>
            <p className="currency_price">{price}$</p>
            <p className="currency_volume">{total_volume.toLocaleString()}$</p> 
        </div>
    )
}

export default Currency