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

function starFilter(products) 
{
  const checkedCheckboxes = Array.from(document.querySelectorAll('input[id="starCheckbox"]:checked'));
  const selectedRating = checkedCheckboxes.map(checkbox => Number(checkbox.value));
  if (selectedRating.length === 0)
    return products;

  return products.filter(product =>
  {
    let productRating = Math.floor(product.rating.rate);
    for (let i = 0; i < selectedRating.length; i++)
    {
      if (selectedRating[i] <= productRating)
        return true;
    }
    return false;
  });
}


function filterProducts()
{
  let filteredProducts = allProducts;
  filteredProducts = categoryFilter(filteredProducts);
  filteredProducts = priceFilter(filteredProducts);
  filteredProducts = starFilter(filteredProducts);
  displayProducts(filteredProducts);
}

document.addEventListener("DOMContentLoaded", function ()
{
  const menuItems = document.querySelectorAll(".nav-item.dropdown.mx-1"); // Seleziona tutti i pulsanti dropdown
  const divSep = document.getElementById("divisoreHeader"); 
  let openDropdown = null; // Tiene traccia di quale menù è aperto (una boolean non funziona per qualche motivo)
  if (menuItems.length > 0)
  {
    menuItems.forEach(menuItem =>
    {
      menuItem.addEventListener("click", function ()
      {
        if (window.innerWidth >= 768)
        {
          if (openDropdown === menuItem)
          {
            divSep.style.height = "100px"; // Il div si riduce
            openDropdown = null;
          } else
          {
            divSep.style.height = "250px"; // Il div si allarga
            openDropdown = menuItem;
          }
        }
      });
    });
  }
  window.addEventListener("resize", function () // Quando la finestra si riduce, il div si riduce a prescindere
  {
    if (window.innerWidth < 768)
    {
      divSep.style.height = "50px";
      openDropdown = null;
    }
  });
});

document.addEventListener("DOMContentLoaded", () =>
{
  fetchAllProducts();
});
