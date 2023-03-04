window.onload = Iniciar;

var elementoVideo;
var barraProgresso;
var duracaoTotal;
var update;

function Iniciar() {
    elementoVideo = document.getElementById("meuVideo");
    barraProgresso = document.getElementById("barra_progresso");
    duracaoTotal = elementoVideo.duration;
    update = setInterval(atualizarBarra, 500);
}

function atualizarBarra() {
    if(!elementoVideo.paused) {
        // 640 - duracaoTotal
        //x - curentTime

        var resultado = (640 * elementoVideo.currentTime)/duracaoTotal;
        barraProgresso.style.width = parseInt(resultado) + "px";
    }
}