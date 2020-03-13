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
            <h5 className="text-center our-programs our" style={{marginBottom: "3%",letterSpacing: "2px",fontSize: "35px",fontFamily: "Merriweather",color: "#000080"}}>Our Programs</h5>
            <h4 className="ourphi-text1">Studios of Joy</h4>
            <p className="text3">"At ABODE, we encourage each child to explore and learn with freedom and responsibility.</p>
            <p className="text4">Every child is supported by a prepared environment and nurtring adults </p>
            <p className="text4">to realize their full potential to grow into confident selt-learners."</p>
            {/* <Explore /> */}
            <Cards />
            <h5 className="text-center our-programs" style={{color: "#000080",fontFamily: "Merriweather"}}>Our Philosophy</h5>
            <h4 className="ourphi-text">Strong minds & Happy Souls</h4>
            <p className="text3">Our Strong Minds philosophy explores and strengthens their logic, language, and scientific curisoity</p>
            <p className="text4">The gola of ur Happy Souls philosophy is to kindle the uniqueness of each child and celebrate life!</p>
            <Ourphilosophy />
            <Campuses />
            <h5 className="text-center our-programs" style={{color: "#000080",fontFamily: "Merriweather"}}>From Our Parents</h5>
            <Testimonial />
            <Youtube /> 
            <Events />   
        </div>
        <Footer />
    </div>
);
export default Home;