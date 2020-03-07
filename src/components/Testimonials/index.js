import React from 'react'
import './testimonial.css'
import Group17 from '../../Images/Group17.jpg'
import Group18 from '../../Images/Group18.jpg'
import Group19 from '../../Images/Group19.jpg'




const Testimonial = props =>(
    <div className="testimonial">
      <div className="card">
          <div className="layer"></div>
          <div className="content">
              <p style={{fontFamily: "Merriweather"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                <div className="image">
                  <img src={Group17} width="100px" height="100px"/>
                </div>
                <div className="details">
                    <h2 style={{fontFamily: "Merriweather",fontSize: "15px",marginTop: "10%"}}>Stella<br/><span>Someone Famous</span></h2>
                </div>
          </div>
      </div>
      <div className="card">
          <div className="layer"></div>
          <div className="content">
              <p style={{fontFamily: "Merriweather"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                <div className="image">
                  <img src={Group18} width="100px" height="100px"/>
                </div>
                <div className="details">
                    <h2 style={{fontFamily: "Merriweather",fontSize: "15px",marginTop: "10%"}}>Gracy<br/><span>Someone Famous</span></h2>
                </div>
          </div>
      </div>
      <div className="card card9">
          <div className="layer"></div>
          <div className="content">
              <p style={{fontFamily: "Merriweather"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
                <div className="image">
                  <img src={Group19} width="100px" height="100px" />
                </div>
                <div className="details">
                    <h2  style={{fontFamily: "Merriweather",fontSize: "15px",marginTop: "10%"}}>Jacob<br/><span>Someone Famous</span></h2>
                </div>
          </div>
      </div>
    </div>
);

export default Testimonial


