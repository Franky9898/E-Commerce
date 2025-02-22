function fetchAndInsertProducts(containerId) {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
      // Mischia i prodotti e seleziona 3 casualmente
      let randomProducts = json.sort(() => Math.random() - 0.5).slice(0, 3);

      // Seleziona il container specifico del carosello
      let container = document.getElementById(containerId);

      // Genera le card
      randomProducts.forEach((product) => {
        let card = `
                        <div class="card" id="${product.id}">
                            <div class="d-flex justify-content-center mt-5">
                            <a href="../paginaProdotto/PaginaProdotto.html?productId=${product.id}">
                                <img src="${product.image}" class="card-img-top" style="width: 6rem;" alt="${product.title}">
                                </a>
                            </div>
                            <div class="card-body d-flex flex-column justify-content-end">
                                <h6 class="card-title">${product.title}</h6>
                                <div class="d-flex justify-content-between align-items-center mt-2">
                                    <span class="card-text">${Number(product.price).toFixed(2)}€</span>
                                    <a href="#" onclick="addToCart(event, '${product.id}')"><i class="fa-solid fa-cart-shopping fa-lg"></i></a>

                                </div>
                            </div>
                        </div>`;

        // Inserisce la card nel container
        container.innerHTML += card;
      });
    });
}

// Chiama la funzione per riempire ogni sezione
fetchAndInsertProducts("carousel-container-1");
fetchAndInsertProducts("carousel-container-2");
fetchAndInsertProducts("carousel-container-3");


function addToCart(event, productId) {
  event.preventDefault(); // Evita il comportamento predefinito del link

  // Crea un elemento per mostrare il messaggio
  let message = document.createElement("div");
  message.innerText = "Prodotto aggiunto al carrello!";
  message.className = "added-message"; // Classe per lo stile
  document.body.appendChild(message);

  // Posiziona il messaggio vicino all'icona cliccata
  let icon = event.target;
  let rect = icon.getBoundingClientRect();
  message.style.position = "absolute";
  message.style.left = `${rect.left + window.scrollX}px`;
  message.style.top = `${rect.top + window.scrollY - 30}px`;

  // Rimuove il messaggio dopo 1.5 secondi
  setTimeout(() => {
      message.remove();
  }, 1500);
}

