import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './about.css'

import Group8 from '../../../Images/Group8.svg'
import Group9 from '../../../Images/Group9.svg';

class Bookbag extends Component{
    render() {
        return(
            <div id="site-wrapper">
            <Header />
            <div id="philosophy-content">
        <div className="">
            <img src={Group8} className="group8" />
        </div>
        <h1 className="philosophy-title">Book Bag program</h1>
            <div class="card mb-3 card2">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={Group9} class="card-img" alt="..." /> 
                     </div>
                    <div class="col-md-8">
                    <div class="card-body"> 
                    <p class="card-text1">“Book Bag” program is a step forward to step by step intensive Reading Program run at ABODE,<br/> for children between 4 1⁄2 to 6 1⁄2 years of age. The foundation of the program is based on Montessori Pedagogy of language training.</p>
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

export default Bookbag;