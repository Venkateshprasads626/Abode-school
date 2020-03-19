import React, { Component } from 'react'
import './founder.css'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import group10 from '../../../../Images/group10.jpg'
import prince2 from '../../../../Images/prince2.jpg'
import prince1 from '../../../../Images/prince1.jpg'

class Founder extends Component{
    render() {
        return(
            <div id="Our-founder">
            <Header />
                <div id="page-content">
                <div>
                    <img src={group10} className="group8" />
                </div>
                <h1>Our Founders</h1>
                <div className="main-container">
                    <div className="content-container">
                        <div className="image-container">
                            <img src={prince2}  className="image1"/>
                            <h1 className="prince-text1">Suman Puvvaladasu</h1>
                            <h2 className="prince-text2">Founder & Director</h2>
                            <p>ABODE Montessori & Multiple Intelligence School & PratibhaSchools.org. </p>
                        </div>
                        <div className="text-container1">
                            <p className="text2">
                            A passionate educationist, Suman Puvvaladasu is an engineer by work and an educationalist by heart.
                            He holds a BE (Hons) degree in EEE from BITS, Pilani and M.S in EE from Arizona State University, USA.
                            Mr. Suman has worked with Arizona State University & Intel, USA in various research, engineering and leadership roles. 
                            </p>
                            <p className="text2">
                            Mr. Suman is a passionate speaker at many corporates (Google, TCS, DLF, Mindspace, etc.)
                            who delivers thinking talks on Studios of Joy,Neural & Psychological Reasons for Learning,
                            Early Childhood Development and The Future of Learning. 
                            </p>
                            <p className="text2">
                            Mr. Suman was born into an educationalist family and has roots in teaching since he was a child.
                            He has teaching experience in India & USA for more than two decades.
                            The passion for running schools which he has had since day one hasn’t diminished in the slightest over these 15 years.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="main-container">
                    <div className="content-container">
                        <div className="image-container">
                            <img src={prince1}  className="image1"/>
                            <h1 className="prince-text1">Radhika Voruganti</h1>
                            <h2 className="prince-text2">Co-founder</h2>
                            <p>ABODE Montessori & Multiple Intelligence School & PratibhaSchools.org. </p>
                        </div>
                        <div className="text-container1">
                            <p className="text2">
                            Ms. Radhika completed her early education at Navodaya schools and envisions creating holistic curriculums 
                            for wholesome child development.
                            </p>
                            <p className="text2">
                            Ms. Radhika holds a BE in EEE from KITS and M.S in EE from Arizona State University, USA. 
                            She worked with Intel,  USA in design, research and leadership roles for over a decade. 
                            </p>
                            <p className="text2">
                            Developing the Elementary program in ABODE is Ms.Radhika’s passion. Her efforts are applied in integrating Montessori
                            and Multiple Intelligences curricula with the needs of current day learning standards of IG-CSE and CBSE.

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

export default Founder