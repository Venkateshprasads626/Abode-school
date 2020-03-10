import React from 'react'
import './admission.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import group19 from '../../Images/group19.jpg'

const Admissions = props =>(
    <div id="site-wrapper">
        <Header />
        <div id="page-content">
                <img src={group19} className="admi-banner"/>
                <p className="admi-text">Admissions open through the year </p>
         
        </div>
                
        <Footer />
    </div>
);


export default Admissions;