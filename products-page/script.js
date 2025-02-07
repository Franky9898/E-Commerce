allProducts = [];

function fetchAllProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
      console.log(products);
      allProducts = products;
      displayProducts(products);
    })
    .catch((error) => console.error("Errore nel recupero dei prodotti", error));
}

function displayProducts(products) {
  const product = products
    .map((product) => {
      return `
          <div class="card" id="${product.id}">
              <div class="d-flex justify-content-center mt-5"><img src="${product.image}" class="card-img-top" style="width: 6rem;" alt="${product.title}"></div>
              <div class="card-body card-body d-flex flex-column justify-content-end">
                <div>
                <h6 class="card-title">
                ${product.title}
                </h6>
                <button
                  class="btn open-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  data-description="${product.description}"
                >
                  Dettagli
                </button>
                <div class="d-flex justify-content-between align-items-center mt-2">
                  <span class="card-text">${product.price}€</span>
                  <a href="#" class=""
                    ><i class="fa-solid fa-cart-shopping fa-lg"></i>
                  </a>
                  </div>
                </div>
              </div>
            </div>
            `;
    })
    .join("");
  document.getElementById("container-cards").innerHTML = product;
}

function categoryFilter(products) {
  const checkedCheckboxes = Array.from(
    document.querySelectorAll('input[id="flexCheckChecked"]:checked')
  ); // Mette in un array le checkbox selezionate
  const selectedCategories = checkedCheckboxes.map(
    (checkbox) => checkbox.value
  ); // Ottiene le categorie selezionate dai valori assegnati alle checkbox
  if (selectedCategories.length === 0) return products;

  return products.filter((product) =>
    selectedCategories.includes(product.category)
  ); // Ritorna i prodotti che appartengono a una categoria selezionata
}

function priceFilter(products) {
  if (document.getElementById("prezzoCrescente").checked)
    return products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

  if (document.getElementById("prezzoDecrescente").checked)
    return products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

  return products;
}

function starFilter(products) {
  const checkedCheckboxes = Array.from(
    document.querySelectorAll('input[id="starCheckbox"]:checked')
  );
  const selectedRating = checkedCheckboxes.map((checkbox) =>
    Number(checkbox.value)
  );
  if (selectedRating.length === 0) return products;

  return products.filter((product) => {
    let productRating = Math.floor(product.rating.rate);
    for (let i = 0; i < selectedRating.length; i++) {
      if (selectedRating[i] <= productRating) return true;
    }
    return false;
  });
}

function filterProducts() {
  let filteredProducts = allProducts;
  filteredProducts = categoryFilter(filteredProducts);
  filteredProducts = priceFilter(filteredProducts);
  filteredProducts = starFilter(filteredProducts);
  displayProducts(filteredProducts);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchAllProducts();
});

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");

  modal.addEventListener("show.bs.modal", function (event) {
    const button = event.relatedTarget;
    const description = button.getAttribute("data-description");

    const modalDescription = modal.querySelector(".card-text");

    modalDescription.textContent = description; // Aggiorna la descrizione
  });
});
