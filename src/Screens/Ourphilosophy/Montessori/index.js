import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './about.css'

import group11 from '../../../Images/group11.svg'
import Group9 from '../../../Images/Group9.svg';

class Montessori extends Component{
    render() {
        return(
            <div id="site-wrapper">
            <Header />
                <div id="page-content">
                <div>
                    <img src={group11} className="group8" />
                </div>
                <h1>Montessori</h1>
                <div className="main-container">
                    <div className="content-container">
                        <div className="image-container">
                            <img src={Group9}  className="group8"/>
                        </div>
                        <div className="text-container1">
                            <p className="text2">
                            When a child reaches 6 years + a Higher Intelligence of the child is identified. They are then encouraged to pursue that stream to a higher level.
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

export default Montessori;