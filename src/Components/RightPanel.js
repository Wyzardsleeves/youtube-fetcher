import React, { Component } from 'react';
import '../assets/styles/RightPanel.css';

class RightPanel extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="right-menu">
        <i className="ion ion-navicon-round" onClick={() => this.widen_menu()}></i>
        <div className="top-menu">
          <ul>
            <li>
              <a>
                <h5>Home</h5>
              </a>
            </li>
            <li>
              <a>
                <h5>Graphics</h5>
              </a>
            </li>
            <li>
              <a>
                <h5>Hire Me</h5>
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-menu">
          <ul>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/justin-lattimore-90387445/">
                <h5>Linkedin</h5>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/Wyzardsleeves/">
                <h5>Github</h5>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/justinlattimore/">
                <h5>Instagram</h5>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://codepen.io/Wyzardsleeves/">
                <h5>CodePen</h5>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://steemit.com/@justinthedev">
                <h5>Steemit Blog</h5>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default RightPanel;
