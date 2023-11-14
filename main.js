function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento não encontrado ou seletor inválido');
    }
}

document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');


for (let contador = 0; listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAaudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAaudio);
    }

    tecla.onkeydown = function (event) {
        
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        } 
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
