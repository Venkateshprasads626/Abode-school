import React, { Component } from 'react'
import './youtube.css'
class Youtube extends Component{
    render() {
        return(
            <div className="Video">
            <div class="embed-responsive embed-responsive-16by9 mb-4">
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/MlNNGeusB7M"
              allowfullscreen></iframe>
          </div>
          </div>
        );
    }
}
export default Youtube;