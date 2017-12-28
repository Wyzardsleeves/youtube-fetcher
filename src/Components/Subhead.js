import React, { Component } from 'react';
import '../assets/styles/Subhead.css';

class Subhead extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <div>
          <div className="subhead-head container">
            <h3>WEB DEVELOPER</h3>
          </div>
          <div className="subhead-body container">
            <h4>Justin Lattimore</h4>
            <p>Hey, I'm an up and coming Web Developer from North Carolina with a 3D and Graphic Design background. I'm mostly familiar with HTML, CSS, jQuery, React.js and Ruby on Rails.</p>
            <p>Please feel free to look through my website.</p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/justin-lattimore-90387445/">
                  <i className="ion-social-linkedin"></i>
                  <h5>Linkedin</h5>
                </a>
              </li>
              <li>
                <a href="https://github.com/Wyzardsleeves/">
                  <i className="ion-social-github"></i>
                  <h5>Github</h5>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/justinlattimore/">
                  <i className="ion-social-instagram-outline"></i>
                  <h5>Instagram</h5>
                </a>
              </li>
              <li>
                <a href="https://codepen.io/Wyzardsleeves/">
                  <i className="ion-social-codepen"></i>
                  <h5>CodePen</h5>
                </a>
              </li>
              <li>
                <a href="https://steemit.com/@justinthedev">
                  <i className="ion-android-people"></i>
                  <h5>Steemit Blog</h5>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Subhead;

/* About Me Stuff
<ul>
  <li>PC Master Race</li>
  <li>Coffeeholic</li>
  <li>Cryptocurrency Mainiac</li>
  <li>Paintballer</li>
</ul>
*/
