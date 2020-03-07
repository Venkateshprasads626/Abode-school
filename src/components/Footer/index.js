import React from 'react'
import './footer.css'
import social1 from '../../Images/social1.svg'
import social2 from '../../Images/social2.svg'
import social3 from '../../Images/social3.svg'

const Footer = props =>(
  
    <footer className="page-footer font-small blue pt-4 footer">
            
             
    <div className="container-fluid text-center text-md-left footer1">
  
    
      <div className="row">
  
      
        <div className="col-md-3 mt-md-0 mt-3">
            <h4 className="h4-footer">Contact ABODE</h4>
              <p className="add">Gachibowli Campus:<br/>
                  MIG 29 - 32<br/>
                  Opp. DLF 3rd Gate<br/>
                  Gachibowli, Hyderabad<br/>
                  Ph: 7416056558, 90101 85000<br/>
                  Email: abodekids@gmail.com 
              </p>
        </div>

        <div className="col-md-3 mt-md-0 mt-3">
          <p className="add1">Nallagandla Campus:<br/>
            86/C, Huda Layout<br/>
            Opp Aparna Sarovar<br/>
            Nallagandla, Hyderabad<br/>
            Ph: 9666448000.
            </p>
        </div>
        <hr className="clearfix w-100 d-md-none pb-3" />  
        <div className="col-md-3 mt-md-0 mt-3">
        <button style={{fontFamily: "Merriweather",background: "#000080"}} type="button" className="btn btn-primary btn3">Schedule a visit</button>
        </div>
        <div className="col-md-3 mt-md-0 mt-3 social-links">
        <h4 className="h4-footer">Follow us</h4>
          <a  href="https://www.facebook.com/ABODESchool/" target="_blank"><img src={social1} className="social11 " /></a>
          <a href="https://twitter.com/AbodeKids" target="_blank"><img src={social2}  className="social22"/></a>
          <a href="https://www.instagram.com/abode_school/" target="_blank"><img src={social3}  className="social33" /></a> 
        </div>
      </div>
 
    </div>   
    <div className="footer-bottom">
      <p className="footercopy">
        © 2020 Copyright: Proudly Created by Rushbee Studios
      </p>
    </div>

  
  </footer>
  

);
export default Footer;