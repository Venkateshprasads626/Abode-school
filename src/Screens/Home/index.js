import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner';
import Explore from '../../components/Explore'
import Cards from '../../components/Cards'
import Youtube from '../../components/Youtube'
import './home.css'



const Home = props =>(
    <div id="site-wrapper">
        <Header />
        <div id="page-content">
            <Banner />
            <Explore />
            <Cards />
            <Youtube />    
        </div>
        <Footer />
    </div>
);
export default Home;