function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');


for(let contador = 0; listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAaudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAaudio);
    }
}
 