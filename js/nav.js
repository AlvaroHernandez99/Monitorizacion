addEventListener('load', () => {
    cargarNav();
});

function cargarNav() {
    fetch('nav.html')
    .then(response => response.text())
    .then((data) => {
        const header = document.querySelector("#header");
        header.innerHTML = data;

        const miUrl = '/segundo/DWES/primera/';

        if(miUrl+'index.html' == window.location.pathname){
            /* SELECCION Y CAMBIO DE COLOR A  PELO */
            const index = document.querySelector("#index");
            index.style.backgroundColor = '#FF0000';
        }

        if(miUrl+'pagina2.html' == window.location.pathname){
            /* SELECCION Y CAMBIO DE COLOR A  PELO */
            const tabla = document.querySelector("#tabla");
            tabla.style.backgroundColor = '#FF0000';
        }
        if(miUrl+'pagina3.html' == window.location.pathname){
            /* SELECCION Y CAMBIO DE COLOR A  PELO */
            const infoG = document.querySelector("#infoG");
            infoG.style.backgroundColor = '#FF0000';
        }
        if(miUrl+'pagina4.html' == window.location.pathname){
            /* SELECCION Y CAMBIO DE COLOR A  PELO */
            const infoM = document.querySelector("#infoM");
            infoM.style.backgroundColor = '#FF0000';
        }
        if(miUrl+'pagina5.html' == window.location.pathname){
            /* SELECCION Y CAMBIO DE COLOR A  PELO */
            const video = document.querySelector("#video");
            video.style.backgroundColor = '#FF0000';
        }
    });
} 








