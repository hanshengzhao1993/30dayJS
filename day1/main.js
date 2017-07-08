window.onload = function () {
  window.addEventListener('keydown', function (e) {
    console.log(e.keyCode);
    var keyCode = e.keyCode;
    var selectDiv = document.querySelector(`div [key-code="${keyCode}"]`);
    console.log(selectDiv);
  })
}
