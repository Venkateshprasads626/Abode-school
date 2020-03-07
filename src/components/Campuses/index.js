import React from 'react'
import Group11 from '../../Images/Group11.jpg'
import school from '../../Images/school.jpg'
import './campuses.css'

const Campuses = props =>(
    <div className="Campuses">
          <h3 className="text-center campuses-hd" style={{fontFamily: "Merriweather",color: "#000080"}}>Our Campuses</h3>
   <div className="row row2">
        <div className="col-md-3"></div>
       <div className="col-md-3 campuses">
       <img src={Group11} className="rounded-circle" alt="Cinque Terre" />
       <p style={{fontFamily: "Merriweather"}} className="campuses-text">
           Gachibowli Campus<br/>
           Toddlers,Preschool,<br/>
           Elementary upto<br/>
           Grade 2
       </p>
       </div>
       <div className="col-md-3 campuses">
       <img src={school} className="rounded-circle" alt="Cinque Terre"/>
       <p style={{fontFamily: "Merriweather"}} className="campuses-text">
          Nallagandla Campus<br/>
          Toddlers,Preschool,<br/>
          Elementary upto<br/>
          Grade 28
       </p>
       </div>
       <div className="col-md-3"></div>
   </div>
   </div>
);

export default Campuses;