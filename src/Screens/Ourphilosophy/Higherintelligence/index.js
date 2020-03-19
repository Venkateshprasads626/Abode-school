import React, { Component } from 'react'
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import './about.css'

import group13 from '../../../Images/group13.svg'
import group15 from '../../../Images/group15.svg';


class Higherintelligence extends Component{
    render() {
        return(
            <div id="site-wrapper">
            <Header />
                <div id="page-content">
                <div>
                    <img src={group13} className="group8" />
                </div>
                <h1>Higher Intelligence</h1>
                <div className="main-container">
                    <div className="content-container">
                        <div className="image-container">
                            <img src={group15}  className="group8"/>
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

export default Higherintelligence;