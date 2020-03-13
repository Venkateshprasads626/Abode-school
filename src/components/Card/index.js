import React from 'react'

import './card.css';

const Card = props =>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="" className="card-img-top" />
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <h3 className="card-title2">{props.title2}</h3>
                <p className="card-text text-secondary">{props.text}</p>
                <a href="#" className="btn btn-outline ">{props.btn}</a>
            </div>
        </div>
    );
} 

export default Card;