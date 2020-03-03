import React from 'react'
import social1 from '../../Images/social1.svg'
import social2 from '../../Images/social2.svg'
import social3 from '../../Images/social3.svg'
import abodelogo from '../../Images/abodelogo.svg'
import { Link } from 'react-router-dom'
import './header.css';

const Header = props =>(
<div className="sticky-top">
<div className="nav1">
                    <nav className="navbar navbar-expand-lg ">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto navbar-nav1">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Term Date</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <div className="">
                                <a  href="https://www.facebook.com/ABODESchool/" target="_blank"><img src={social1} className="social1 " /></a>
                               <a href="https://twitter.com/AbodeKids" target="_blank"><img src={social2}  className="social2"/></a>
                               <a href="https://www.instagram.com/abode_school/" target="_blank"><img src={social3}  className="social3" /></a> 
                            </div>
                            </ul>
                        
                        </div>
                    </nav>
                </div>
              
  <nav className="navbar navbar-expand-lg sticky-top bg-white navbar-light nav2">
  <a  href="/"><img src={abodelogo} className="abodelogo" /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <Link to="/About/Philosophy"><button className="dropdown-item" type="button">Our Philosophy</button></Link>
              <Link to="/About/history"><button className="dropdown-item" type="button">Our History</button></Link>
              <Link to="/About/campus"><button className="dropdown-item" type="button">Our Campus</button></Link>
              </div>
      </li>
   
      <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our School
          </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <Link to="/School/Toddler"><button className="dropdown-item" type="button">Toddler</button></Link>
                <Link to="/School/Preschool"><button className="dropdown-item" type="button">Preschool</button></Link>
                <Link to="/School/Elementary"><button className="dropdown-item" type="button">Elementary</button></Link>
            </div>
      </li>
   
      <li class="nav-item dropdown">
          <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Abode Life
          </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <Link to="/Abodelife/Multipleintelligence"><button className="dropdown-item" type="button">Multiple Intelligence</button></Link>
                <Link to="/Abodelife/Higherintelligence"><button className="dropdown-item" type="button">Higher Intelligence</button></Link>
                <Link to="/Abodelife/Bookbag"><button className="dropdown-item" type="button">Book Bag program</button></Link>
            </div>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Abode Team
          </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <Link to="#"><button className="dropdown-item" type="button">Founders</button></Link>
                <Link to="#"><button className="dropdown-item" type="button">Seniormanagement</button></Link>
                <Link to="#"><button className="dropdown-item" type="button">Teachers</button></Link>
                <Link to="#"><button className="dropdown-item" type="button">Resource Teachers</button></Link>
                <Link to="#"><button className="dropdown-item" type="button">Management Team</button></Link>
                <Link to="#"><button className="dropdown-item" type="button">Support staff</button></Link>
            </div>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          FAQ's
          </a>
      </li>
      </ul>
  </div>
  <button type="button" className="btn btn1">Admissions</button>
</nav>
</div>

);
export default Header;
