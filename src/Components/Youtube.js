import React, { Component } from 'react';
import axios from "axios";
{/* AIzaSyCKtZ3QLnakjbuDpfAl-i3vL_zQ_AehjX0 */}

class Youtube extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentVid: 0,
      vidList: []
    };
  };

  componentWillMount(){
    this.vidGrab();
  };

  vidList(){

  };

  vidGrab(){
    axios.get('GET',
              '/youtube/v3/channels',
              {'id': 'UCLn0jCRt_zJfsMhR1WFswzw',
               'part': 'snippet,contentDetails,statistics'})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  makeMain(){

  }

  render() {
    return (
      <div>
        <div className="Youtube">
          <div className="youtube-main">
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/TGEqyjDAnpk"
            frameBorder="0" gesture="media" allow="encrypted-media"
            allowFullScreen></iframe>
          </div>
          <div className="youtube-thumbs">
            <li onclick={() => this.makeMain()}></li>
            <li onclick={() => this.makeMain()}></li>
          </div>
        </div>
      </div>
    );
  }
}

export default Youtube;
