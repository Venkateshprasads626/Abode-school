import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './about.css'

import group12 from '../../../Images/group12.svg'
import group14 from '../../../Images/group14.svg';




class Multipleintelligence extends Component{
    render() {
        return(
            <div id="site-wrapper">
            <Header />
                <div id="page-content">
                <div>
                    <img src={group12} className="group8" />
                </div>
                <h1>Multiple Intelligence</h1>
                <div className="main-container">
                    <div className="content-container">
                        <div className="image-container">
                            <img src={group14}  className="group8"/>
                        </div>
                        <div className="text-container1">
                            <p className="text2">
                            Our MI program exposes children to different intelligences until 6 years of age. 
                            </p>
                            <p className="text2">
                            lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <p className="text2">
                            lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            
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