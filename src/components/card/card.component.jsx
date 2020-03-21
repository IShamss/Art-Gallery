import React from 'react';
import './card.styles.css';

export const Card=props=>{
    return(
    <div className="card-container">
        <img className="pic" src={`https://i.picsum.photos/id/${(props.album.id)*(props.album.id+3)}/200/230.jpg`} alt=""/>
        <h4>{props.album.username}</h4>
    <p className="email">{props.album.email}</p>
    </div>
    )
}