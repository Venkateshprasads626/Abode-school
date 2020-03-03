import React from 'react'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import './campus.css'

import Group9 from '../../../Images/Group9.svg'
import Group11 from '../../../Images/Group11.jpg'


const campus = props =>(
   <div id="site-wrapper">
       <Header />
        <div className="history-content">
            <div className="">
                <img src={Group11} className="group11" />
            </div>
            <h1 className="history-title">Our Campus</h1>
                <div class="card mb-3 card2">
                    <div class="row no-gutters">
                        <div class="col-md-4">
                            <img src={Group9} class="card-img" alt="..." /> 
                         </div>
                        <div class="col-md-8">
                        <div class="card-body"> 
                        <p class="card-text1">lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br/><br/>
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/><br/></p>
                        <p className="card-text2">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                       
                      
                    </div>
                </div>
            </div>
        </div>
    
    
        </div>
        <Footer />
   </div>
);

export default campus