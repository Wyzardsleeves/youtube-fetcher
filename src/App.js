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
            <Mainhead />
          </div>
          <div className="subhead">
            <Subhead />
          </div>
          <div className="youtube">
            <Youtube />
          </div>
          <div className="projects">
            <Projects />
          </div>
        </div>
        <div className="right-panel">
          <RightPanel />
        </div>
      </div>
    );
  }
}

export default App;
