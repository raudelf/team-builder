import React from 'react';

const Cards = (props) => {
    return (
        <div className='cards'>
        {props.member.map(m => (
            <div className='cardInfo' key={m.number}>
            <h2>{m.member}</h2>
            <p>{m.role}</p>
            <p>{m.email}</p>
            </div>
        ))}
        </div>
    )
}

export default Cards;