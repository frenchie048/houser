import React from 'react';

function House(props) {
    const { id, name, address, city, state, zip } = props.house;
    return (
        <div>
            <h1>House!</h1>
            <p>{name}</p>
            <p>{address}</p>
            <p>{city}</p>
            <p>{state}</p>
            <p>{zip}</p>
            <button onClick={() => props.deleteHouse(id)}>Delete</button>
        </div>
    )
}

export default House;
//REMINDER PASSED PROPS:
//house={house} deleteHouse={this.deleteHouse}