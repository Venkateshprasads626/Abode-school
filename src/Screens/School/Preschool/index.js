import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import './preschool.css'
import Group8 from '../../../Images/Group8.svg'
import Group13 from '../../../Images/Group13.jpg'



const Preschool = props =>(
   <div id="site-wrapper">
       <Header />
        <div id="preschool-content">
            <div className="">
                <img src={Group13} className="group13" />
            </div>
            <h1 className="preschool-title">Preschool</h1>
             <div className="preschool-content">
                 <p className="preschool-text">
                 0 - 6 yrs is called the 'Sensorial Plane'. Our Preschool Program is from 3 to 6 years of age. During this phase, 
                 every child experiences an innate urge to explore, work, learn and discover the world around them.
                  This is the most sensitive stage in a child’s life, an age of explosive learning, where learning happens by absorbing information in an enriched PREPARED ENVIRONMENT.
                 </p>
             </div>
        </div>
        <Footer />
   </div>
);

export default Preschool