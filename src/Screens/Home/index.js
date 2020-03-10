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
            <Banner /><br/><br/>
            <h5 className="text-center our-programs our" style={{letterSpacing: "2px",fontSize: "35px",fontFamily: "Merriweather",color: "#000080"}}>Our Programs</h5>
            <Explore />
            <Cards />
            <h5 className="text-center our-programs" style={{color: "#000080",fontFamily: "Merriweather"}}>Our Philosophy</h5>
            <Ourphilosophy />
            <Campuses />
            <h5 className="text-center our-programs" style={{color: "#000080",fontFamily: "Merriweather"}}>From Our Families</h5>
            <Testimonial />
            <Youtube /> 
            <Events />   
        </div>
        <Footer />
    </div>
);
export default Home;