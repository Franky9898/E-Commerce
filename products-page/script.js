allProducts = [];

function fetchAllProducts()
{
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) =>
    {
      console.log(products);
      allProducts = products;
      displayProducts(products);
    })
    .catch((error) => console.error("Errore nel recupero dei prodotti", error));
}

function displayProducts(products)
{
  const product = products
    .map((product) =>
    {
      return `
            <div class="col-md-4 mb-4" id="${product.id}">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
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

function categoryFilter(products) 
{
  const checkedCheckboxes = Array.from(document.querySelectorAll('input[id="flexCheckChecked"]:checked')); // Mette in un array le checkbox selezionate
  const selectedCategories = checkedCheckboxes.map(checkbox => checkbox.value); // Ottiene le categorie selezionate dai valori assegnati alle checkbox
  if (selectedCategories.length === 0)
    return products;

  return products.filter(product => selectedCategories.includes(product.category)); // Ritorna i prodotti che appartengono a una categoria selezionata
}

function priceFilter(products)
{
  if (document.getElementById("prezzoCrescente").checked)
    return products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

  if (document.getElementById("prezzoDecrescente").checked)
    return products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));

  return products;
}


function filterProducts()
{
  let filteredProducts = allProducts;
  filteredProducts = categoryFilter(filteredProducts);
  filteredProducts = priceFilter(filteredProducts);
  displayProducts(filteredProducts);
}

document.addEventListener("DOMContentLoaded", () =>
{
  fetchAllProducts();
});
