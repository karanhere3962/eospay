function hasGetUserMedia() {
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}
function setGetUserMedia(){
if (hasGetUserMedia()) {
  document.getElementById("top").innerHTML = "It works";
} else {
  alert('getUserMedia() is not supported by your browser');
}
}