import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './about.css'

import Group8 from '../../../Images/Group8.svg'
import Group9 from '../../../Images/Group9.svg';


class Higherintelligence extends Component{
    render() {
        return(
            <div id="site-wrapper">
            <Header />
            <div id="philosophy-content">
        <div className="">
            <img src={Group8} className="group8" />
        </div>
        <h1 className="philosophy-title">Higher Intelligence</h1>
            <div class="card mb-3 card2">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={Group9} class="card-img" alt="..." /> 
                     </div>
                    <div class="col-md-8">
                    <div class="card-body"> 
                    <p class="card-text1"> When a child reaches 6 years + a Higher Intelligence of the child is identified. They are then encouraged to pursue that stream to a higher level.</p><br/><br/>
                    <p class="card-text1">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/><br/>
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/><br/></p>
                         <p class="card-text1">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/><br/>
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/><br/></p>
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

export default Higherintelligence;