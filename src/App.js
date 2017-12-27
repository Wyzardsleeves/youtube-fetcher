import React, { Component } from 'react';
import Youtube from "./Components/Youtube";
import Projects from "./Components/Projects";
import Subhead from "./Components/Subhead";
import Mainhead from "./Components/Mainhead";
import RightPanel from "./Components/RightPanel";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-body">
          <div className="mainhead">
            {/* Projects will be loaded here */}
            <Mainhead />
          </div>
          <div className="subhead">
            {/* Projects will be loaded here */}
            <Subhead />
          </div>
          <div className="youtube">
            {/* Vids will be loaded here */}
            <Youtube />
          </div>
          <div className="projects">
            {/* Projects will be loaded here */}
            <Projects />
          </div>
        </div>
        <div className="right-panel">
          {/* Projects will be loaded here */}
          <RightPanel />
        </div>
      </div>
    );
  }
}

export default App;
