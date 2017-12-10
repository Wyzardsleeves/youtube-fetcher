import React, { Component } from 'react';
import Youtube from "./Components/Youtube";
import Projects from "./Components/Projects";
import Subhead from "./Components/Subhead";
import Mainhead from "./Components/Mainhead";

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="mainhead-contain">
          {/* Projects will be loaded here */}
          <Mainhead />
        </div>
        <div className="subhead-contain">
          {/* Projects will be loaded here */}
          <Subhead />
        </div>
        <div className="youtube-contain">
          {/* Vids will be loaded here */}
          <Youtube />
        </div>
        <div className="projects-contain">
          {/* Projects will be loaded here */}
          <Projects />
        </div>
      </div>
    );
  }
}

export default App;
