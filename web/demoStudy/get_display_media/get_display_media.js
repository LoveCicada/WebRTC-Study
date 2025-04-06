
var videoPlayer = document.querySelector("video#video_player");

if(!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
    console.log('getDisplayMedia not supported on your browser!');
}else{
  navigator.mediaDevices.getDisplayMedia()
  .then(stream =>{
    videoPlayer.srcObject = stream;
    stream.getVideoTracks().forEach(track => {
      console.log(JSON.stringify(track.getSettings()));
      console.log("Track: " + track.kind + " " + track.label + " " + track.id);
    });
  }).catch(err => {
    console.log("getDisplayMedia failed, " + err);
  });
}