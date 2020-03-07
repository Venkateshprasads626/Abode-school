import React from 'react'
import './events.css'

const Events = props =>(
    <div className="events">
        <div className="row">
            <div className="col-md-2 events-text1">
                <p>Events :-</p>
            </div>
            <div className="col-md-4">
                <p className="events-text">
                    A thinking talk<br/>[10-11:30AM, March 9th]
                </p>
            </div>
            <div className="col-md-4">
                <p className="events-text">
                    A thinking talk<br/> [10-11:30AM, March 9th]
                </p>
            </div>
            <div className="col-md-2">
                
            </div>
        </div>
    </div>
);

export default Events;