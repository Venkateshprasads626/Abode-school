import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import abodemap from '../../Images/abodemap.svg'

const contact = props =>(
    <div id="site-wrapper">
        <Header />
        <a href="https://www.google.com/maps/place/ABODE+Montessori+and+Multiple+Intelligence+School/@17.4507542,78.3565997,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb93b8d927e705:0xeb1bf1b8ee9164dc!8m2!3d17.4507491!4d78.3587937" target="_blank"><img src={abodemap} className="abodemap" /></a>
    <div id="contact">
        
        <div className="row">
            <div className="col-md-3 address">
                <h3 className="contact-title">Our Address</h3>
                <p className="contact-add">
                Gachibowli Campus:<br/>
                MIG 29 - 32<br/>
                Opp. DLF 3rd Gate<br/>
                Gachibowli, Hyderabad<br/>
                Ph: 7416056558, 90101 85000<br/>
                </p>
                <p className="contact-add1">Nallagandla Campus:<br/>
                    86/C, Huda Layout<br/>
                    Opp Aparna Sarovar<br/>
                    Nallagandla, Hyderabad<br/>
                    Ph: 9666448000.
                </p>
            </div>
        
            <div className="col-md-3 keycontact">
            <h3 className="contact-title">Key Contacts</h3>
                <p className="contact-add2">
               <p className="contact-add3">Admissions & General Enquiries:</p>
                <p className="contact-add4">info@wellingtonschool.org</p>

                <p className="contact-add3"> Careers Mail:</p>
                <p className="contact-add4"> abode.hiring@gmail.com </p>

             
                </p>
            </div>
            <div className="col-md-5 questions">
            <h3 className="contact-title">Questions & Queries</h3>
            <p className="contact-add5">If you have any questions or queries<br/>please fill out the form below</p>
            <form>
                <label>Your Name *</label><br/>
                <input type="text" name="name" id="name" /><br/><br/>
                <label>Email *</label><br/>
                <input type="email" name="email" /><br/><br/>
                <label>Subject</label><br/>
                <input type="text" name="text" /><br/><br/>
                <label>Your Message *</label><br/>
                    <textarea></textarea><br/>
                    <button type="button" class="btn btn-primary btn6">Submit</button>
            </form>
            </div>
        </div>
    </div>
    <Footer />
    </div>
);

export default contact;

