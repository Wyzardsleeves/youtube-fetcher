import React, { Component } from 'react';
import axios from "axios";

/* API Key for "youtube-fetcher"

Youtube API Key: AIzaSyB2WdeBFHh2GQeOQjPtSmy1eW3f3ht-fAs
YouTube Channel ID: UCDN5MWIT0kbAWwsxTHFgt_g
YouTube User ID: DN5MWIT0kbAWwsxTHFgt_g

Base URL link: https://www.googleapis.com/youtube/v3/search?part=snippet%20&channelId=UCDN5MWIT0kbAWwsxTHFgt_g&key=AIzaSyB2WdeBFHh2GQeOQjPtSmy1eW3f3ht-fAs
*/

const baseYoutubeURL = "https://www.googleapis.com/youtube/v3/search?part=snippet%20&channelId=UCDN5MWIT0kbAWwsxTHFgt_g&key=AIzaSyB2WdeBFHh2GQeOQjPtSmy1eW3f3ht-fAs";

class Youtube extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentVid: 'TGEqyjDAnpk',
      vidList: [],
    };
  };

  //state changese go through here
  componentWillMount(){
    this.vidGrab();
    this.vidChange();
  };

  //function makes the thumbnail the main vid
  vidChange(e){
    console.log(e);
    let tempUse = e;
    if(tempUse){// == "youtube#video"){
      this.setState({currentVid: e.id.videoId}, function(){
        console.log(this.state.currentVid);
      })
    }
  }

  //the actual fetcher of videos
  vidGrab(){
    axios.get(baseYoutubeURL)
      .then((response) => {
        this.setState({vidList: response.data.items}, function(){
          console.log(this.state.vidList);
        });
      })
      .catch(function (error){
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <div className="youtube-frame">
          <div className="container youtube-frame-main">
            <iframe width="1120" height="630" title="mainVidFrame"
            src={"https://www.youtube.com/embed/" + this.state.currentVid}
            frameBorder="0" gesture="media" allow="encrypted-media"
            allowFullScreen>
            </iframe>
          </div>
        </div>
        <div className="youtube-thumb">
          <div className="container youtube-thumbs-main">
            <ul>
              {this.state.vidList./*splice(1).*/map((thumb, index) =>
                <li key={index} onClick={() => this.vidChange(thumb)}>
                  <img alt="thumbSlot" src={thumb.snippet.thumbnails.medium.url}/>
                  <h5>{thumb.snippet.title}</h5>
                  <h5>{thumb.id.videoId}</h5>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}



export default Youtube;
