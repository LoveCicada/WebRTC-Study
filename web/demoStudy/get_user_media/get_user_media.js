
var videoPlayer = document.querySelector("video#video_player");

if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia not supported on your browser!');
}else{
  var constraints = { 
    video: {
      width:{min: 640, ideal: 1280, max: 1920}, 
      height:{min: 480, ideal: 720, max: 1080}},
    audio: true };

  navigator.mediaDevices.getUserMedia(constraints)
  .then(stream =>{
    videoPlayer.srcObject = stream;
    stream.getVideoTracks().forEach(track => {
      console.log(JSON.stringify(track.getSettings()));
      console.log("Track: " + track.kind + " " + track.label + " " + track.id);
    });
  }).catch(err => {
    console.log("getUserMedia failed, " + err);
  });
}