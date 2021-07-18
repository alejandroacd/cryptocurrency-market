import React from 'react';

const Currency = () => {
    return (
        <div className="currency_container">
            <div className="currency">
                <img src={image} alt="crypto" />
                <h1>{cryptoName}</h1>
                
            </div>
        </div>
    )
}

export default Currency