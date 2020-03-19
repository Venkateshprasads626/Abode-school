import React, { Component } from 'react'
import './story.css'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Group10 from '../../../Images/Group10.jpg'
import story from '../../../Images/story.jpg'

class Story extends Component{
    render() {
        return(
          <div id="Our-story">
          <Header />
              <div id="page-content">
              <div>
                  <img src={Group10} className="group8" />
              </div>
              <h1>Our Story</h1>
              <div className="main-container">
                  <div className="content-container">
                      <div className="image-container">
                          <img src={story}  className="image1"/>
                          
                      </div>
                      <div className="text-container1">
                          <p className="text2">
                          ABODE Montessori and Multiple Intelligence school was started in the year 2012 with its first Preschool branch in Gachibowli Hyderabad. 
                          </p>
                          <p className="text2">
                          ABODE is a brainchild of Mr. Suman Puvvaladasu. After an enriching childhood in an educationist’s household and excelling in school all through his formative years, 
                          Mr. Suman felt that there was a fundamental problem with the conventional educational system.
                          He felt that schools were designed to ‘teach’ children and in doing so it failed to follow the child in their natural progression. 
                          The repetitive way in which concepts were taught failed to excite curiosity or create an environment for the joy of learning.
                          Out of this disillusionment came a dream to open a school that would have a child-driven curriculum.  
                          </p>
                          <p className="text2">
                          Our philosophy represents a will to create ‘Studio’s of Joy’ - a space where Montessori methodology blends with Multiple intelligences 
                          to invent an environment that would support all children of varied learning abilities. This goal applies to all our programs, Preschool, Elementary, Middle School, 
                          where without putting limitations on the child's age and traditional learning expectations every child is encouraged to excel in their strengths and become self-assured individuals. 
                          </p>
                          <p className="text2">
                          Today, ABODE Montessori and Multiple Intelligence School is an institution that is quietly standing proud in the assurance that 
                          we are nurturing children with positive social values, coupled with a creative freedom that equips
                           every child with the necessary life skills to become a global citizen.
                          </p>
                      </div>
                  </div>
              </div>
      
        
             
          
              </div>
          <Footer />
      </div>
        );
    }
}

export default Story