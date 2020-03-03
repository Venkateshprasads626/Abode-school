import React from 'react'
import './contact.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

const contact = props =>(
    <div id="site-wrapper">
        <Header />
    <div id="contact">
        <div className="row">
            <div className="col-md-2">
                <h3 className="contact-title">Our Address</h3>
                <p className="contact-add">
                Gachibowli Campus:<br/>
                MIG 29 - 32<br/>
                Opp. DLF 3rd Gate<br/>
                Gachibowli, Hyderabad<br/>
                Ph: 7416056558, 90101 85000<br/>
                Email: abodekids@gmail.com
                </p>
            </div>
            <div className="col-md-2">
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

                <p className="contact-add3"> Headmaster:</p>
                <p className="contact-add4">headmaster@wellingtonschool.org</p>

                <p className="contact-add3"> Finance Department & Bursar:</p>
                <p className="contact-add4">finance@wellingtonschool.org</p>

                <p className="contact-add3"> The Junior School</p>
                <p className="contact-add4">primary@wellingtonschool.org</p>

                <p className="contact-add3">  Press and Marketing:</p>
                <p className="contact-add4">press@wellingtonschool.org</p>

                <p className="contact-add3"> Former Pupils:</p>
                <p className="contact-add4">formerpupils@wellingtonschool.org</p>
                </p>
            </div>
            <div className="col-md-5 questions">
            <h3 className="contact-title">Questions & Queries</h3>
            <p className="contact-add5">If you have any questions or queries please fill out the form below</p>
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

