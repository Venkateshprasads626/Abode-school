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
        <h1 className="philosophy-title">Our Diffrentiation</h1>
       
            <div class="card md-3 card2">
                <h3 className="text-center our-diff">Preschool</h3>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={Group9} class="card-img" alt="..." /> 
                     </div>
                    <div class="col-md-8">
                    <div class="card-body"> 
                    <p class="card-text1">“Book Bag” program is a step forward to step by step intensive Reading Program run at ABODE,<br/> for children between 4 1⁄2 to 6 1⁄2 years of age. The foundation of the program is based on Montessori Pedagogy of language training.</p><br/><br/>
                    <p class="card-text1">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/><br/>
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/><br/></p>
            </div>
        </div>
    </div>

</div>
<div class="card md-3 card2">
<h3 className="text-center our-diff">Elementary</h3>
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <img src={Group9} class="card-img" alt="..." /> 
                     </div>
                    <div class="col-md-8">
                    <div class="card-body"> 
                    <p class="card-text1">“Book Bag” program is a step forward to step by step intensive Reading Program run at ABODE,<br/> for children between 4 1⁄2 to 6 1⁄2 years of age. The foundation of the program is based on Montessori Pedagogy of language training.</p><br/><br/>
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

export default Bookbag;