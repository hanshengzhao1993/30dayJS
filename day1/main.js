window.onload = function () {
  window.addEventListener('keydown', function (e) {
    var keyCode = e.keyCode;
    var selectDiv = document.querySelector(`div [key-code="${keyCode}"]`);
    if(!selectDiv){
      return;
    }
    var audio = selectDiv.querySelector('audio');
    audio.currentTime = 0;
    audio.play();

    selectDiv.classList.add('playing');

    setTimeout(function () {
      selectDiv.classList.remove('playing');

    },300)

    // selectDiv.audio
    console.log(selectDiv);
    console.log(audio);
  })
}
