import React, { Component } from 'react';

class VideoPlayer extends Component{
  render(){
    return(
      <div className="video-player">
        <video 
          controls
          autoPlay
          loop
          src={"https://stream.mux.com/aDeKoKTvsnzyrJ1SeTl01TE9wux5Q1RDP/high.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InQ5UHZucm9ZY0hQNjhYSmlRQnRHTEVVSkVSSXJ0UXhKIn0.eyJleHAiOjE1ODY2NzU2NDIsImF1ZCI6InYiLCJzdWIiOiJhRGVLb0tUdnNuenlySjFTZVRsMDFURTl3dXg1UTFSRFAifQ.EixtWVE279UwYSCJ9Kz5i8fuIIpysDV5DGCWCmXAJx6u9wXCRJiq2hVX347iOk_RSrkpMXXTt_xtDlMMFkPRHDZCK_bY0RcuaHtD7CmcEv8bwJvfWG3bSRlmD2LXyTT-T2yiZ6Pbl1VA5SLqJ1rF7ELaZOcuof_WzduWg_nmQi39izZjQ1tIX0wTA4PIFFFKz2ZoeJ8pXviLhYcMgwna4zhLqiao23Bq6Ba2Ch8dl-QI5N716KqM89PMg7_YMoLpEb3J55JWdU7D5Y_GRZGOeSUSgav-xD6j3SBnnOejYUIy0SIWypy7qseHK3Icw8m7Xx1Ucx5sYR1yhtNMvV3x_A"}
        />
        <button>[ ]</button>
      </div>
    );
  }
}

export default VideoPlayer;