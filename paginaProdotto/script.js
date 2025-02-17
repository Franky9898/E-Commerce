document.addEventListener("DOMContentLoaded", () => {
    // Ottieni l'ID del prodotto dall'URL
    const productId = getProductIdFromUrl();

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            if (productId) {
                // Trova il prodotto con l'ID corrispondente
                const product = data.find(p => p.id == productId);
                if (product) {
                    aggiornaPagina(product);
                } else {
                    console.error("Prodotto non trovato");
                }
            } else {
                // Se non c'è un ID, mostra il primo prodotto
                aggiornaPagina(data[0]);
            }
            popolaCarosello(data); // Popola il carosello con prodotti cliccabili
        })
        .catch(error => console.error("Errore nel caricamento:", error));
});

// Funzione per ottenere l'ID del prodotto dall'URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('productId');
}

// Funzione per aggiornare la scheda principale con il prodotto selezionato
function aggiornaPagina(product) {
    document.getElementById("productTitle").textContent = product.title;
    document.getElementById("productPrice").textContent = `€ ${product.price}`;
    document.getElementById("mainImage").src = product.image;

    // Aggiorna il pannello laterale
    document.getElementById("detailTitle").textContent = product.title;
    document.getElementById("detailPrice").textContent = `€ ${product.price}`;
    document.getElementById("detailDescription").textContent = product.description;

    // Aggiorna le miniature
    aggiornaMiniature(product);

    // Cambia l'URL per includere l'ID del prodotto
    history.pushState({}, '', `PaginaProdotto.html?productId=${product.id}`);
}

// Funzione per popolare le miniature con immagini del prodotto selezionato
function aggiornaMiniature(product) {
    const thumbnailsContainer = document.getElementById("thumbnails");
    thumbnailsContainer.innerHTML = ""; // Svuota le miniature

    for (let i = 0; i < 4; i++) {
        const img = document.createElement("img");
        img.src = product.image;
        img.classList.add("thumbnail");
        img.onclick = () => cambiaImmagine(product.image);
        thumbnailsContainer.appendChild(img);
    }
}

// Funzione per cambiare l'immagine principale
function cambiaImmagine(nuovaImmagine) {
    document.getElementById('mainImage').src = nuovaImmagine;
}

// Funzione per popolare il carosello con prodotti cliccabili
function popolaCarosello(products) {
    const carouselInner = document.querySelector(".carousel-inner");
    carouselInner.innerHTML = ""; // Pulisce il carosello

    let index = 0;
    while (index < products.length) {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (index === 0) item.classList.add("active");

        // Creiamo una riga con massimo 3 prodotti per volta
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        for (let j = 0; j < 3 && index < products.length; j++, index++) {
            const product = products[index];

            // Creiamo il div della colonna
            const colDiv = document.createElement("div");
            colDiv.classList.add("col");

            // Creiamo l'immagine
            const img = document.createElement("img");
            img.src = product.image;
            img.classList.add("d-block", "w-100", "clickable-product");
            img.alt = product.title;

            // Aggiungiamo l'evento per selezionare il prodotto
            img.addEventListener("click", () => {
                // Reindirizza alla pagina del prodotto con l'ID corrispondente
                window.location.href = `PaginaProdotto.html?productId=${product.id}`;
            });

            // Aggiungiamo l'immagine alla colonna e la colonna alla riga
            colDiv.appendChild(img);
            rowDiv.appendChild(colDiv);
        }

        // Aggiungiamo la riga al carosello-item e poi al carosello
        item.appendChild(rowDiv);
        carouselInner.appendChild(item);
    }
}

// Funzione per aprire il pannello laterale
function apriDettagli() {
    document.getElementById('sidePanel').style.left = '0';
}

// Funzione per chiudere il pannello laterale
function chiudiDettagli() {
    document.getElementById('sidePanel').style.left = '-300px';
}

// Funzione per aggiungere al carrello (simulazione)
function aggiungiAlCarrello() {
    alert('Prodotto aggiunto al carrello!');
}