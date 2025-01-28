// Cambia immagine principale al click sulle thumbnail
function cambiaImmagine(nuovaImmagine) {
    document.getElementById("mainImage").src = nuovaImmagine;
}

// Apri la barra laterale
function apriSidebar() {
    document.querySelector(".sidebar").style.left = "0";
}

// Chiudi la barra laterale
function chiudiSidebar() {
    document.querySelector(".sidebar").style.left = "-300px";
}