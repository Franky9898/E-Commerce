function fetchAllProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) => {
      console.log(products);
      displayProducts(products);
    })
    .catch((error) => console.error("Errore nel recuper dei prodotti", error));
}

function fetchProductsByCategory(category) {
  fetch("https://fakestoreapi.com/products/category/" + category)
    .then((response) => response.json())
    .then((products) => {
      console.log(products);
      displayProducts(products);
    })
    .catch((error) => console.error("Errore nel recuper dei prodotti", error));
}

let selectedCategories = [];

function fetchProductsByCategories(categories) {
  const promises = categories.map((category) =>
    fetch("https://fakestoreapi.com/products/category/" + category).then(
      (response) => response.json()
    )
  );

  Promise.all(promises)
    .then((results) => {
      const allProducts = results.flat();
      displayProducts(allProducts);
    })
    .catch((error) => console.error("Errore nel recuper dei prodotti", error));
}

function filterCheck(element, category) {
  if (element.checked) {
    selectedCategories.push(category);
  } else {
    selectedCategories = selectedCategories.filter((cat) => cat !== category);
  }

  if (selectedCategories.length > 0) {
    fetchProductsByCategories(selectedCategories);
  } else {
    fetchAllProducts();
  }
}

function displayProducts(products) {
  const product = products
    .map((product) => {
      return `
            <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${product.title}</h5>
                <p class="card-text">${product.description}</p>
                <p class="card-text">${product.price}</p>
                <a href="#" class="btn btn-primary">Aggiungi al carrello</a>
                </div>
            </div>
            </div>
            `;
    })
    .join("");
  document.getElementById(
    "container-cards"
  ).innerHTML = `<div class="row">${product}</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  fetchAllProducts();
});
