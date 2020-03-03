import React from 'react'
import './footer.css'

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
                  Email: abodekids@gmail.com </p>
  
        </div>
        <div className="col-md-3 mt-md-0 mt-3">
  <p className="add1">Nallagandla Campus:<br/>
      86/C, Huda Layout<br/>
      Opp Aparna Sarovar<br/>
      Nallagandla, Hyderabad<br/>
      Ph: 9666448000.</p>

</div>
       
  
        <hr className="clearfix w-100 d-md-none pb-3" />
  
       
        <div className="col-md-2 mb-md-0 mb-3">
  
       
          <h5 className="text-uppercase">About</h5>
  
          <ul className="list-unstyled">
            <li>
              <a href="#">Our Philosophy</a>       
          </li>
            <li>
              <a href="#">Our History</a>
            </li>
            <li>
              <a href="#!">Our Campus</a>
            </li>
          </ul>
  
        </div>
   
        <div className="col-md-2 mb-md-0 mb-3">
  
       
          <h5 className="text-uppercase">Our School</h5>
  
          <ul className="list-unstyled">
          <li>
              <a href="#!">Toddler</a>       
          </li>
            <li>
              <a href="#!">Pre-School</a>
            </li>
            <li>
              <a href="#!">Elementary</a>
            </li>
          </ul>
  
        </div>
          
        <div className="col-md-2 mb-md-0 mb-3">
  
       
          <h5 className="text-uppercase">Useful Links</h5>
  
          <ul className="list-unstyled">
          <li>
              <a href="#!">Why ABODE ?</a>       
          </li>
            <li>
              <a href="#!">Visit US</a>
            </li>
            <li>
              <a href="#!">Apply</a>
            </li>
            <li>
              <a href="#!">FAQ's</a>
            </li>
          </ul>
  
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