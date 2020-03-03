import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import './toddler.css'
import Group8 from '../../../Images/Group8.svg'
import Group12 from '../../../Images/Group12.jpg'



const Toddler = props =>(
   <div id="site-wrapper">
       <Header />
        <div id="toddler-content">
            <div className="">
                <img src={Group12} className="group8" />
            </div>
            <h1 className="toddler-title">Toddler</h1>
             <div className="toddler-content">
                 <p className="toddler-text">
                 This age and stage in a child's life is the absorbent phase. Our Toddlers program is from 1 1/2 yrs to 3yrs . Our goal is to create numerous opportunities to work with various tools for the kid to explore and grow as a confidant and independent toddler.
                 </p>
             </div>
        </div>
        <Footer />
   </div>
);

export default Toddler