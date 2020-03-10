import React from 'react'
import Group11 from '../../Images/Group11.jpg'
import school from '../../Images/school.jpg'
import './campuses.css'

const Campuses = props =>(
    <div className="Campuses">
          <h3 className="text-center campuses-hd" style={{fontFamily: "Merriweather",color: "#000080"}}>Our Campuses</h3>
   <div className="row row2">
       
       <div className="col-md-6 campuses1">
       <img src={Group11} className="rounded-circle circle1" alt="Cinque Terre" />
       <div>
       <p style={{fontFamily: "Merriweather"}} className="campuses-text">
          <p className="Gachi-campus">Gachibowli Campus</p>
           Toddlers,Preschool,<br/>
           Elementary upto<br/>
           Grade 2
       </p>
       </div>
       </div>
       <div className="col-md-6 campuses">
       <img src={school} className="rounded-circle circle2" alt="Cinque Terre"/>
       <p style={{fontFamily: "Merriweather"}} className="campuses-text">
       <p className="nalla-campus">Nallagandla Campus</p>
          Toddlers,Preschool,<br/>
          Elementary upto<br/>
          Grade 28
       </p>
       </div>
      
   </div>
   </div>
);

export default Campuses;