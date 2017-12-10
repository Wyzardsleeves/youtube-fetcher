import React, { Component } from 'react';

class Subhead extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <h3>Web Developer</h3>
        <h4>Justin Lattimore</h4>
        <p>Hey, I'm an up and coming Web Developer from North Carolina with a 3D and Graphic Design background. I'm mostly familiar with HTML, CSS, jQuery, React.js and Ruby on Rails.</p>
        <p>Please feel free to look through my website.</p>
        <ul>
          <li>PC Master Race</li>
          <li>Coffeeholic</li>
          <li>Cryptocurrency Mainiac</li>
          <li>Paintballer</li>
        </ul>
      </div>
    )
  }
}

export default Subhead;
