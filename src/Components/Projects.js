import React, { Component } from 'react';
import '../Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="contain">
        <section className="project-head">
          <h3>PROJECTS</h3>
        </section>
        <section className="project-list">
          <div className="model-1">
            <aside>
              <h4>Crypto Central</h4>
              <p>React.js project using AJAX to pull data from coinmarketcap.com</p>
            </aside>
            <article>
              {/* image placeholder */}

            </article>
          </div>
          <div className="model-2">
            <article>
              {/* image placeholder */}

            </article>
            <aside>
              <h4>Mock Pong</h4>
              <p>An HTML5 game using Canvas.</p>
            </aside>
          </div>
          <div className="model-1">
            <aside>
              <h4>Mocipedia</h4>
              <p>Ruby on Rails based Wikipedia copycat.</p>
            </aside>
            <article>
              {/* image placeholder */}

            </article>
          </div>
          <div className="model-2">
            <article>
              {/* image placeholder */}

            </article>
            <aside>
              <h4>Mockit Off</h4>
              <p>Angularfire powered checklist with expiration after 3 min and priority system!</p>
            </aside>
          </div>
          <div className="model-1">
            <aside>
              <h4>PSD Test</h4>
              <p>PSD to HTML exercise.</p>
            </aside>
            <article>
              {/* image placeholder */}

            </article>
          </div>
          <div className="model-2">
            <article>
              {/* image placeholder */}

            </article>
            <aside>
              <h4>Mock Chat</h4>
              <p>Angularfire chatroom that uses a cookie to collect a username.</p>
            </aside>
          </div>
        </section>
      </div>
    );
  }
}

export default Projects;
