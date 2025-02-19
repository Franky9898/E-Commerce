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
                                <img src="${product.image}" class="card-img-top" style="width: 6rem;" alt="${product.title}">
                            </div>
                            <div class="card-body d-flex flex-column justify-content-end">
                                <h6 class="card-title">${product.title}</h6>
                                <div class="d-flex justify-content-between align-items-center mt-2">
                                    <span class="card-text">${product.price}€</span>
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
