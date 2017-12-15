import React, { Component } from 'react';
import axios from "axios";
//AIzaSyCKtZ3QLnakjbuDpfAl-i3vL_zQ_AehjX0

/* API Key for "youtube-fetcher"

Youtube API Key: AIzaSyB2WdeBFHh2GQeOQjPtSmy1eW3f3ht-fAs
YouTube Channel ID: UCDN5MWIT0kbAWwsxTHFgt_g
YouTube User ID: DN5MWIT0kbAWwsxTHFgt_g

*/

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
    this.setState.vidList = [];
  }

  //the actual fetcher of videos
  vidGrab(){
    axios.get("https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&allThreadsRelatedToChannelId=UCDN5MWIT0kbAWwsxTHFgt_g&key=AIzaSyB2WdeBFHh2GQeOQjPtSmy1eW3f3ht-fAs")
      .then(response => {
        this.setState({vidList: response.data.items}, function(){
          console.log(this.state.vidList);
        });
      })
      .catch(function (error){
        console.log(error);
      });

    /*
      axios.get('GET',
        '/youtube/v3/channels',
        {'id': 'UCLn0jCRt_zJfsMhR1WFswzw',
         'part': 'snippet,contentDetails,statistics'})
    */
  }

  render() {
    return (
      <div>
        <div className="container youtube-frame">
          <div className="youtube-frame-main">
            <iframe width="1120" height="630" title="mainVidFrame"
            src={"https://www.youtube.com/embed/" + this.state.currentVid}
            frameBorder="0" gesture="media" allow="encrypted-media"
            allowFullScreen>
            </iframe>
          </div>
        </div>
        <div className="container youtube-thumb">
          <div className="youtube-thumbs-main">
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
