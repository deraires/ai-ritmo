
function Mostrar() {

    reproductor.classList.toggle("isnot-active");

}

function Pausar() {
    anim.classList.toggle("paused");

    if (botonPlay.classList.contains("fa-circle-pause")) {
        botonPlay.classList.remove("fa-circle-pause");
        botonPlay.classList.add("fa-circle-play");
    } else {
        botonPlay.classList.add("fa-circle-pause");
        botonPlay.classList.remove("fa-circle-play");
    }

}



function TemaSiguiente() {
    if (temaActual < temasTotales - 1)
        temaActual++;
    else
        temaActual = 0;

    Actualizar();

}
function TemaAnterior() {

    if (temaActual > 0)
        temaActual--;
    else
        temaActual = temasTotales - 1;

    Actualizar();


}

function Actualizar() {
    Artistas.forEach((art) => {
        art.innerHTML = ListadoTemas[temaActual].cancion;
    });

    Temas.forEach((tm) => {
        tm.innerHTML = ListadoTemas[temaActual].artista;
    });


    ImagenTema.src = ListadoTemas[temaActual].imagen;
    DuracionTema.innerHTML = ListadoTemas[temaActual].duracion

}