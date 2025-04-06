
async function Start(){
  if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    console.error('Media devices API: getUserMedia not supported in this browser.');
  }else{
    var pcAmy = new RTCPeerConnection();
    var pcBob = new RTCPeerConnection();

    var constraints = { 
      video: {
        width:{min: 640, ideal: 1280, max: 1920}, 
        height:{min: 480, ideal: 720, max: 1080}},
      audio: true };
  }

  var stream = await navigator.mediaDevices.getUserMedia(constraints);
  stream.getTracks().forEach(track => {
    pcAmy.addTrack(track);
    pcBob.addTrack(track);
  });

  var offerSdp = await pcAmy.createOffer();
  await pcAmy.setLocalDescription(offerSdp);

  // offerSdp 通过信令服务发送给Bob

  await pcBob.setRemoteDescription(offerSdp);
  var answerSdp = await pcBob.createAnswer();
  pcBob.setLocalDescription(answerSdp);
  // answerSdp 通过信令服务发送给Amy

  await pcAmy.setRemoteDescription(answerSdp);

  console.log("offerSdp: " + JSON.stringify(offerSdp));
  console.log("answerSdp: " + JSON.stringify(answerSdp));

  console.log(pcAmy.localDescription);
  console.log(pcAmy.remoteDescription); 

  console.log(pcBob.localDescription);
  console.log(pcBob.remoteDescription);


}


Start();
// 通过信令服务交换SDP和ICE候选者
