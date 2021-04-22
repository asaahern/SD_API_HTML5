
if (window.File && window.FileReader && window.FileList) {

  function handleFileSelect(e) {

    // load local file
    var localfile = e.target.files[0];

    // launch error if file type not correct
    if (!localfile.type.match('video.*')) {
      document.getElementById("validation").innerHTML="<h5> No se puede cargar fichero porque no es de tipo video</h5>";
      document.getElementById("validation").style.color="red";
    }
    else{
      document.getElementById("validation").innerHTML="<h5> Seleccionado fichero de tipo video</h5>";
      document.getElementById("validation").style.color="green";
    }

    // source local file as target video and show when ready to play
    let player = document.getElementById("videoPlayer");
    player.src = URL.createObjectURL(localfile) 
    player.onloadstart = function(){
      document.getElementById("loading").innerHTML="<h5> Cargando video, puede demorarse unos minutos </h5>";
    }
    player.oncanplay = function(){
      document.getElementById("loading").innerHTML="<h5> Video listo para ser reproducido </h5>";
    }
  }
} else {
alert('La API de FILE no es soportada en este navegador.');
};


function playVideo(){
  document.getElementById('videoPlayer').play();
}; 

function pauseVideo() {
  document.getElementById('videoPlayer').pause();
};

function increaseVolume() {
  document.getElementById('videoPlayer').volume += 0.1;
}; 

function decreaseVolume() {
  document.getElementById('videoPlayer').volume -= 0.1;
};
