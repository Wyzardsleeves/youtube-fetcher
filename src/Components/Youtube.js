import React, { Component } from 'react';
import axios from "axios";
//AIzaSyCKtZ3QLnakjbuDpfAl-i3vL_zQ_AehjX0

class Youtube extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentVid: 'TGEqyjDAnpk',
      vidList: []
    };
  };

  //state changese go through here
  componentWillMount(){
    this.vidGrab();
    this.vidMain();
  };

  //function makes the thumbnail the main vid
  vidMain(){

  }

  vidList(){

  };

  //the actual fetcher of videos
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

  render() {
    return (
      <div>
        <div className="Youtube">
          <div className="youtube-main">
            <iframe width="1120" title="mainVidFrame" height="630" src={"https://www.youtube.com/embed/" + this.state.currentVid}
            frameBorder="0" gesture="media" allow="encrypted-media"
            allowFullScreen></iframe>
          </div>
          <div className="youtube-thumbs">
            <ul>
              <li><img src={this.vidThumb + 0} alt="thumbSlot1"></img></li>
              <li><img src={this.vidThumb + 1} alt="thumbSlot2"></img></li>
              <li><img src={this.vidThumb + 2} alt="thumbSlot3"></img></li>
              <li><img src={this.vidThumb + 3} alt="thumbSlot4"></img></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Youtube;
