import React, { Component } from 'react'
import './cards.css'
import Group5 from '../../Images/Group5.svg'
import Group6 from '../../Images/Group6.svg'
import Group7 from '../../Images/Group7.svg'
import Card from '../Card'



class Cards extends Component{
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
                {/* <div className="card-columns">
                    <div className="card">
                        <img src={Group5} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Toddlers Program</h5>
                        <p className="card-text">This age and stage in a child's life is the absorbent phase. Our Toddlers program is from 1 1/2 yrs to 3yrs . Our goal is to create numerous opportunities to work with various tools for the kid to explore and grow as a confidant and independent toddler.</p>
                        <button type="button" className="btn btn-lg btn1">Discover the Toddler Program</button>
                        </div>
                    </div>
                    <div class="card">
                        <img src={Group6} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Pre-school Program</h5>
                        <p className="card-text">0 - 6 yrs is called the 'Sensorial Plane'. Our Preschool Program is from 3 to 6 years of age. During this phase, every child experiences an innate urge to explore, work, learn and discover the world around them. This is the most sensitive stage in a child’s life, an age of explosive learning, where learning happens by absorbing information in an enriched PREPARED ENVIRONMENT.</p>
                        <button type="button" className="btn btn-lg">Explore the Pre-School Program</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src={Group7} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Elementary Program</h5>
                        <p className="card-text">Our Elementary & Middle School Community cultivates your child’s imagination, reasoning skills, social development, and intellect by providing individualized and small group lessons and projects.</p>

                        <button type="button" className="btn btn-lg btn2">Explore the Elementory Program</button>

                        <button type="button" className="btn btn-lg">Explore the Elementary Program</button>

                        </div>
                    </div>
                </div> */}
             {/* <div class="card-group">
  <div class="card">
    <img src={Group5} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={Group6} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={Group7} class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div> */}


<div className="row">
  <div className="col-md-4">
    <Card  imgsrc={Group5} title="Toddlers Program"
    text="This age and stage in a child's life is the absorbent phase. Our Toddlers program is from 1 1/2 yrs to 3yrs .
     Our goal is to create numerous opportunities to work with 
     various tools for the kid to explore and grow as a confidant and independent toddler."
     btn="Discover the Toddler Program"
    />
  </div>
  <div className="col-md-4">
    <Card imgsrc={Group6} title="Preschool Program"
    text="0 - 6 yrs is called the 'Sensorial Plane'. Our Preschool Program is from 3 to 6 years of age. During this phase, 
    every child experiences an innate urge to explore, work, learn and discover the world around them. This is the most sensitive stage in a child’s life,
     an age of explosive learning, where learning happens by absorbing information in an enriched PREPARED ENVIRONMENT."
     btn="Explore the Pre-School Program"
    />
  </div>
  <div className="col-md-4">
    <Card imgsrc={Group7} title="Elementary Program"
    text="Our Elementary & Middle School Community cultivates your child’s imagination, reasoning skills, social development,
     and intellect by providing individualized and small group lessons and projects."
     btn="Explore the Elementary Program"
    />
  </div>
</div>





















</div>   
        );
    }
}

export default Cards;
