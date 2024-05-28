let imagen = document.getElementById("imagen");
let cont = 0;
let arrImagenes = [];
arrImagenes[0] = "img/img2.jpg";
arrImagenes[1] = "img/img3.jpg";
arrImagenes[2] = "img/img4.jpg";
arrImagenes[3] = "img/img9.jpg";
let timer = setInterval(siguiente, 5000);
function anterior() {
    if (cont > 0) {
        cont--;
    } else {
        cont = (arrImagenes.length - 1);
    }
    imagen.src = arrImagenes[cont];
    reiniciarTimer();
}
function siguiente() {
    if (cont < arrImagenes.length - 1) {
        cont++;
    } else {
        cont = 0;
    }
    imagen.src = arrImagenes[cont];
    reiniciarTimer();
}

function reiniciarTimer() {
    clearInterval(timer);
    timer = setInterval(siguiente, 5000);
}