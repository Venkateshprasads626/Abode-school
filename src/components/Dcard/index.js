import React from 'react'
import './Dcard.css'
const Dcard = props =>{
    return(
        <div className="card mb-3 Dcard-bingo" style={{width: "80%", height: "600"}}>
            <div class="row no-gutters Dcard-bingo">
                <div class="col-md-4">
                    <img src={props.imgsrc} class="card-img" alt="..."/>
                </div>
                <div class="col-md-8">
                    <div class="card-body ">
                    <h5 class="card-title">{props.title}</h5>
                    <p className="cardtext">{props.cardtext}</p>
                           
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dcard