// Funzione per cambiare l'immagine principale
function cambiaImmagine(nuovaImmagine) {
    document.getElementById('mainImage').src = nuovaImmagine;
}

// Funzione per aggiungere il prodotto al carrello
function aggiungiAlCarrello() {
    alert('Prodotto aggiunto al carrello!');
    // Qui puoi aggiungere la logica per aggiungere il prodotto al carrello
}

// Funzione per aprire/chiudere il pannello laterale
function apriDettagli() {
    const sidePanel = document.getElementById('sidePanel');
    
    // Se il pannello è chiuso, lo apriamo
    if (sidePanel.style.left === '-300px' || sidePanel.style.left === '') {
        sidePanel.style.left = '0';  // Mostra il pannello
    } else {
        sidePanel.style.left = '-300px';  // Nasconde il pannello
    }
}

// Funzione per chiudere il pannello laterale
function chiudiDettagli() {
    const sidePanel = document.getElementById('sidePanel');
    sidePanel.style.left = '-300px';  // Nasconde il pannello
}