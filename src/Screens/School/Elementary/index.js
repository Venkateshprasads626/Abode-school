import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import './preschool.css'
import Group8 from '../../../Images/Group8.svg'
import Group13 from '../../../Images/Group13.jpg'



const Elementary = props =>(
   <div id="site-wrapper">
       <Header />
        <div id="preschool-content">
            <div className="">
                <img src={Group13} className="group13" />
            </div>
            <h1 className="preschool-title">Elementary Program</h1>
             <div className="preschool-content">
                 <p className="preschool-text">
                 Our Elementary & Middle School Community cultivates your child’s imagination,
                 reasoning skills, social development, and intellect by providing individualized and small group lessons and projects.
                 </p>
             </div>
        </div>
        <Footer />
   </div>
);

export default Elementary