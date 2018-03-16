import React, { Component } from 'react';

class Mainhead extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="mainhead-contain">
        <div className="github-head">
          <a href="https://github.com/Wyzardsleeves/youtube-fetcher" target="_blank">
            <strong>
              <i className="ion-social-github-outline"></i>
              <p>Github for this site</p>
            </strong>
          </a>
        </div>
      </div>
    )
  }
}

export default Mainhead;
