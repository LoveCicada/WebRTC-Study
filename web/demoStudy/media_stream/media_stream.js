
var videoPlayer = document.querySelector("video#video_player");

if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    console.log('getUserMedia not supported on your browser!');
}else{
  var constraints = { 
    video: true,
    audio: true 
  };

  navigator.mediaDevices.getUserMedia(constraints)
  .then(stream =>{

    stream.getTracks().forEach(track => {
      console.log(`id: ${track.id}, kind: ${track.kind}, label: ${track.label}, enabled: ${track.enabled}`);
    });
  }).catch(err => {
    console.log("getUserMedia failed, " + err);
  });
}