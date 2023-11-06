function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;


while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]

    const instrumento = tecla.classList[1];
    
    const idAaudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAaudio);
    }

    contador = contador + 1;
}