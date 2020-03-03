import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './about.css'
import Dcard from '../../../components/Dcard'
import Group8 from '../../../Images/Group8.svg'
import Group9 from '../../../Images/Group9.svg';

import { Link } from 'react-router-dom'


class Multipleintelligence extends Component{
    render() {
        return(
            <div id="site-wrapper">
                <Header />
                <div id="philosophy-content">
            <div className="">
                <img src={Group8} className="group8" />
            </div>
            <h1 className="philosophy-title">Multiple Intelligence</h1>
                <div class="card mb-3 card2">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={Group9} class="card-img" alt="..." /> 
                         </div>
                        <div class="col-md-8">
                        <div class="card-body"> 
                        <p class="card-text1">Our MI program exposes children to different intelligences until 6 years of age. <br/><br/></p>
                    </div>
                </div>
            </div>
        </div>
    
    
        </div>
                <Footer />
            </div>
        );
    }
}

export default Multipleintelligence;