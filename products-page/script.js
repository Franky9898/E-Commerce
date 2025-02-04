function fetchAllProducts()
{
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((products) =>
    {
      console.log(products);
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

function categoryFilter() 
{
  const checkedCheckboxes = Array.from(document.querySelectorAll('input[id="flexCheckChecked"]:checked')); // Mette in un array le checkbox selezionate
  const selectedCategories = checkedCheckboxes.map(checkbox => checkbox.value); // Ottiene le categorie selezionate dai valori assegnati alle checkbox
  if (selectedCategories.length === 0) 
  {
    fetchAllProducts();
    return;
  }
  // Per ogni prodotto, se nelle categorie selezionate c'è la categoria del prodotto, rimuove il display none, altrimenti lo aggiunge
  allProducts.forEach(product =>
  {
    if (selectedCategories.includes(product.category))
    {
      document.getElementById(product.id).classList.remove('d-none');
    } else
    {
      document.getElementById(product.id).classList.add('d-none');
    }
  });
}

document.addEventListener("DOMContentLoaded", () =>
{
  fetchAllProducts();
});
