import React, { Component } from 'react';
import '../assets/styles/Projects.css';

class Projects extends Component {
  render() {
    return (
      <div>
        <section className="project-head">
          <h3>PROJECTS</h3>
        </section>
        <section className="project-list">
          <div className="model-1 slim">
            <aside>
              <h4>Crypto Central</h4>
              <p>React.js project using AJAX to pull data from coinmarketcap.com</p>
            </aside>
            <article>
              <img alt="Crypto Central" src={require("../assets/images/crypto-central.PNG")}/>
            </article>
          </div>
          <div className="model-2 slim">
            <aside>
              <img alt="Mock Pong" src={require("../assets/images/mock-pong.PNG")}/>
            </aside>
            <article>
              <h4>Mock Pong</h4>
              <p>An HTML5 game using Canvas.</p>
            </article>
          </div>
          <div className="model-3 slim">
            <aside>
              <h4>Mocipedia</h4>
              <p>Ruby on Rails based Wikipedia copycat.</p>
            </aside>
            <article>
              <img alt="Mockipedia" src={require("../assets/images/mockipedia.PNG")}/>
            </article>
          </div>
          <div className="model-4 slim">
            <aside>
              <img alt="Mockit Off" src={require("../assets/images/mockit-off.PNG")}/>

            </aside>
            <article>
              <h4>Mockit Off</h4>
              <p>Angularfire powered checklist with expiration after 3 min and priority system!</p>
            </article>
          </div>
          <div className="model-1 slim">
            <aside>
              <h4>PSD Test</h4>
              <p>PSD to HTML exercise.</p>
            </aside>
            <article>
              <img alt="PSD Test" src={require("../assets/images/psd-practice.PNG")}/>

            </article>
          </div>
          <div className="model-2 slim">
            <aside>
              <img alt="Mock Chat" src={require("../assets/images/mock-chat.PNG")}/>

            </aside>
            <article>
              <h4>Mock Chat</h4>
              <p>Angularfire chatroom that uses a cookie to collect a username.</p>
            </article>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
