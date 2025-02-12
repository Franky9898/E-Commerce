// Quando la pagina è caricata, recupera i prodotti
document.addEventListener("DOMContentLoaded", () => {
    fetch("https://fakestoreapi.com/products") // Ottiene tutti i prodotti
        .then(response => response.json()) // Converte la risposta in JSON
        .then(data => {
            aggiornaPagina(data[0]); // Mostra il primo prodotto nella scheda principale
            popolaCarosello(data); // Popola il carosello con più prodotti
        })
        .catch(error => console.error("Errore nel caricamento:", error));
});

// Funzione per aggiornare la scheda principale del prodotto
function aggiornaPagina(product) {
    document.querySelector(".product-info h1").textContent = product.title;
    document.querySelector(".price").textContent = `€ ${product.price}`;
    document.querySelector(".description").textContent = product.description;
    document.getElementById("mainImage").src = product.image;

    // Aggiorna anche il pannello laterale con i dettagli del prodotto
    aggiornaDettagliPannello(product);
}

// Funzione per popolare il carosello con 3 immagini per volta
function popolaCarosello(products) {
    const carouselInner = document.querySelector(".carousel-inner");
    carouselInner.innerHTML = ""; // Svuota il carosello

    let index = 0; // Indice per scorrere i prodotti
    while (index < products.length) {
        // Crea un nuovo carosello-item
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) item.classList.add("active"); // Imposta il primo elemento come attivo

        // Crea una riga di 3 immagini
        let imagesHTML = '';
        for (let j = 0; j < 3 && index < products.length; j++, index++) {
            const product = products[index];
            imagesHTML += `
                <div class="col">
                    <img src="${product.image}" class="d-block w-100" alt="${product.title}" onclick="aggiornaPagina(${JSON.stringify(product)})">
                </div>
            `;
        }

        // Aggiungi le immagini al carosello-item
        item.innerHTML = `<div class="row">${imagesHTML}</div>`;
        carouselInner.appendChild(item);
    }
}

// Funzione per cambiare l'immagine principale
function cambiaImmagine(nuovaImmagine) {
    document.getElementById('mainImage').src = nuovaImmagine;
}

// Funzione per aggiungere il prodotto al carrello
function aggiungiAlCarrello() {
    alert('Prodotto aggiunto al carrello!');
}

// Funzione per aprire il pannello laterale
function apriDettagli() {
    document.getElementById('sidePanel').style.left = '0';
}

// Funzione per chiudere il pannello laterale
function chiudiDettagli() {
    document.getElementById('sidePanel').style.left = '-300px';
}

// Funzione per aggiornare il pannello laterale con i dettagli del prodotto
function aggiornaDettagliPannello(product) {
    const sidePanel = document.getElementById('sidePanel');
    sidePanel.querySelector("h2").textContent = product.title; // Nome prodotto
    sidePanel.querySelector(".price-detail").textContent = `€ ${product.price}`; // Prezzo
    sidePanel.querySelector(".description-detail").textContent = product.description; // Descrizione
}