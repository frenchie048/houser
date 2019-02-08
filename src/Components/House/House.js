import React from 'react';
import './house.css';

function House(props) {
    const { id, name, address, city, state, zip, img, mortgage, rent } = props.house;
    return (
        <div className='house-card'>
            {/* <h1>House!</h1> */}
            <div className='house-img'>
                <img src={img} />
            </div>

            <div className='house-info'>
                <p>Property Name: {name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip: {zip}</p>
            </div>
            <div className='financials'>
                <p>Monthly Mortgage: {mortgage}</p>
                <p>Desired Rent: {rent}</p>
            </div>
            <button className='delete-button' onClick={() => props.deleteHouse(id)}>Delete</button>
        </div>
    )
}

export default House;
//REMINDER PASSED PROPS:
//house={house} deleteHouse={this.deleteHouse}