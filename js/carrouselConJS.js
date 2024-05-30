let imagen = document.getElementById("imagen");
let cont = 0;
let arrImagenes = [];
arrImagenes[0] = "img/1-Denon-DJ-SC6000M-Prime.jpg";
arrImagenes[1] = "img/2-pioneer-dj-ddj-rev1.jpg";
arrImagenes[2] = "img/3-Pionner-Dj DDJ-FLX4.jpg";
arrImagenes[3] = "img/4-Pro-Dj-CH8USB.jpg";
let timer = setInterval(siguiente, 3000);
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
    timer = setInterval(siguiente, 3000);
}