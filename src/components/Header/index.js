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
                                <a className="nav-link" href="#">Calender</a>
                            </li>
                            <li className="nav-item">
                               <a  className="nav-link" href="https://abode.myclassboard.com/" target="_blank">Parents Login</a>
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
  <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
      <li class="nav-item dropdown">
          <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          About
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              {/* <Link to="/About/Philosophy"><button className="dropdown-item" type="button">Our Philosophy</button></Link> */}
              <Link to="/About/Story"><button className="dropdown-item" type="button">Our story</button></Link>
              <Link to="#"><button className="dropdown-item dropright" type="button">Our People
                <div class="dropdown-menu">
                    <Link to="/About/People/Founder"><button className="dropdown-item" type="button">Founder</button></Link>
                    <Link to="#"><button className="dropdown-item" type="button">Core Team</button></Link>
                    <Link to="#"><button className="dropdown-item" type="button"> Advisory team </button></Link>
                </div>  
              </button></Link>
              <Link to="/About/campus"><button className="dropdown-item dropright" type="button">Our Campuses
              <div class="dropdown-menu">
                    <Link to="#"><button className="dropdown-item" type="button">Gachibowli</button></Link>
                    <Link to="#"><button className="dropdown-item" type="button">Nallagandla</button></Link>
                   
                </div>
              </button></Link>
              {/* <Link to="/About/history"><button className="dropdown-item" type="button">Our History</button></Link> */}
            
              </div>
      </li>
   
        <li class="nav-item dropdown megamenu-li">
            <a class="nav-link " href="" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Our School</a>
                <div class="dropdown-menu megamenu" aria-labelledby="dropdown01">
                    <div className="row">
                        <div class="col-sm-5 col-lg-3">
                             <h5 className="toddler-hd"style={{color:"#000080",fontFamily: "Merriweather"}}>Toddler program</h5>
                            <a style={{fontSize: "15px"}}class="dropdown-item" href="#">Toddlers</a>
                            <a style={{fontSize: "15px"}}class="dropdown-item" href="#">Usefull Information</a>
                            <div className="vl1"></div>
                        </div>
                        <div class="col-sm-4 col-lg-3">
                            <h5 className="preschool-hd" style={{color:"#000080",fontFamily: "Merriweather"}}>Preschool program</h5>
  					        <a style={{fontSize: "15px"}}class="dropdown-item" href="#">Preschool</a>
                            <a style={{fontSize: "15px"}}class="dropdown-item" href="#">Curriculum</a>
                            <a style={{fontSize: "15px"}}class="dropdown-item" href="#">Early Readers program</a>
                            <div className="vl2"></div>
                        </div>
                        <div class="col-sm-6 col-lg-3 ele">
                            <h5 className="elementary-hd" style={{color:"#000080",fontFamily: "Merriweather"}}>Elementary program</h5>
 					        <a style={{fontSize: "15px"}} class="dropdown-item" href="#">Elementary</a>
                            <a style={{fontSize: "15px"}}class="dropdown-item" href="#">Our Curriculum</a>
                            <a style={{fontSize: "15px"}}class="dropdown-item" href="#">Our Differntiators</a>
                            <div className="vl3"></div>     
                        </div>
                    </div>
                </div>
        </li>
   
        <li class="nav-item dropdown">
          <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Our Philosophy
          </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <Link to="/Abodelife/Multipleintelligence"><button className="dropdown-item" type="button">Montessori</button></Link>
                <Link to="/Abodelife/Higherintelligence"><button className="dropdown-item" type="button">Multiple Intelligence</button></Link>
                <Link to="/Abodelife/Bookbag"><button className="dropdown-item" type="button">Higher Intelligence </button></Link>
            </div>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          ABODE Life
          </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <Link to="#"><button className="dropdown-item dropright" type="button">Engage
                <div class="dropdown-menu">
                    <Link to="#"><button className="dropdown-item" type="button">Book Bag</button></Link>
                    <Link to="#"><button className="dropdown-item" type="button">Adhvan</button></Link>
                    <Link to="#"><button className="dropdown-item" type="button">Lekhan </button></Link>
                </div> 
                </button></Link>
                <Link to="#"><button className="dropdown-item dropright" type="button">Enrich
                <div class="dropdown-menu">
                    <Link to="#"><button className="dropdown-item" type="button">Read-a-Thon</button></Link>
                    <Link to="#"><button className="dropdown-item" type="button">Math-a-Thon</button></Link>
                    <Link to="#"><button className="dropdown-item" type="button">Spell Bee</button></Link>
                </div> 
                </button></Link>
                <Link to="#"><button className="dropdown-item dropright" type="button">Evolve
                <div class="dropdown-menu">
                    <Link to="#"><button className="dropdown-item" type="button">Curio</button></Link>
                    <Link to="#"><button className="dropdown-item" type="button">Cultural Exhibitions</button></Link>
                </div> 
                </button></Link>
            </div>
      </li>
      <li class="nav-item dropdown">
          <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Gallery
          </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <Link to="#"><button className="dropdown-item" type="button">Photo Gallery</button></Link>
                <Link to="#"><button className="dropdown-item" type="button">Video Gallery</button></Link>
            </div>
      </li>
      <Link to="/Admissions"><button type="button" className="btn btn2">Admissions</button></Link>
      </ul>
  </div>
  <Link to="/Admissions"><button type="button" className="btn btn1">Admissions</button></Link>
</nav>
</div>

);
export default Header;
