import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner';
import Campuses from '../../components/Campuses'
import Explore from '../../components/Explore'
import Cards from '../../components/Cards'
import Ourphilosophy from '../../components/Ourphilosophy';
import Youtube from '../../components/Youtube'
import './home.css'
import Testimonial from '../../components/Testimonials';
import Events from '../../components/Events';



const Home = props =>(
    <div id="site-wrapper">
        <Header />
        <div id="page-content">
            <Banner />
            <Campuses />
            <h5 className="text-center our-programs our" style={{color: "red",letterSpacing: "2px",fontSize: "35px",fontFamily: "Merriweather"}}>Our Programs</h5>
            <Explore />
            <Cards />
            <h5 className="text-center our-programs" style={{color: "#000080",fontFamily: "Merriweather"}}>Our Philosophy</h5>
            <Ourphilosophy />
            <h5 className="text-center our-programs" style={{color: "#000080",fontFamily: "Merriweather"}}>From our Families</h5>
            <Testimonial />
            <Youtube /> 
            <Events />   
        </div>
        <Footer />
    </div>
);
export default Home;