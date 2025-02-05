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
          <div class="card" style="width: 15rem" id="${product.id}">
              <img
                src="${product.image}"
                class="card-img-top p-5"
                alt="${product.title}"
              />
              <div class="card-body">
                <h6 class="card-title">
                ${product.title}
                </h6>
                <button
                  class="btn btn-primary open-modal"
                  data-bs-toggle="modal"
                  data-bs-target="#modal"
                  data-description="${product.description}"
                >
                  Dettagli
                </button>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="card-text">${product.price}€</span>
                  <a href="#" class=""
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                      width="30px"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            `;
    })
    .join("");
  document.getElementById(
    "container-cards"
  ).innerHTML = `<div class="row gap-3">${product}</div>`;
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

function filterProducts() {
  let filteredProducts = allProducts;
  filteredProducts = categoryFilter(filteredProducts);
  filteredProducts = priceFilter(filteredProducts);
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
