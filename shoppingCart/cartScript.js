function displayCartProducts(products)
{
  const product = products
    .map((product) =>
    {
      return `
          <div class="card my-3">
              <div class="row g-0">
                <div class="col-md-4 align-content-center">
                  <img src="${product.image}" class="img-fluid rounded my-2 mx-auto d-block" alt="${product.title}"
                    style="width: 70%; height: auto; max-height: 450px;">
                </div>
                <div class="col-md-8">
                  <div class="card-body parolaCasuale">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">
                    ${product.description}
                    </p>
                    <p class="card-text">
                      Prezzo: ${product.price}€
                    </p>
                    <p class="card-text">
                    <small class="text-body-secondary" style= "text-decoration: underline";>Opzioni regalo</small>
                    </p>

                    <div class="d-flex align-items-center my-2 justify-content-between">
                      <span> Quantità: </span>
                      <span>
                        <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity('${product.id}', -1)">-</button>
                          <span class="mx-2">${product.quantity}</span>
                        <button class="btn btn-outline-secondary btn-sm" onclick="updateQuantity('${product.id}', 1)">+</button>
                      </span>
                    </div>
                    <button class="btn btn btn-primary" onclick="removeFromCart(${product.id})">Rimuovi dal carrello</button>
                  </div>
                </div>
              </div>
            </div>
            `;
    })
    .join("");
  document.getElementById("leftContainer").innerHTML = product;
  const subtotal = subtotalCart(products);
  document.getElementById("subtotale").innerHTML = subtotal + "€";
  document.getElementById("costiSpedizione").innerHTML = shippingCost(subtotal);
  document.getElementById("totale").innerHTML = total(subtotal) + "€";
}

/*
function addToCart(event, productId) 
{
  event.preventDefault();
  const selectedProduct = allProducts.find(product => product.id === productId);
  if (selectedProduct) 
  {
    let existingProduct = productCart.find(product => product.id === productId);
    if (!existingProduct) 
    {
      selectedProduct.quantity = 1;
      productCart.push(selectedProduct);
    } else 
    {
      existingProduct.quantity += 1;
    }
    localStorage.setItem("cart", JSON.stringify(productCart));
    displayCartProducts(productCart);
  }
} 
*/
let productCart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(event, productId)
{
  event.preventDefault();
  const selectedProduct = allProducts.find(product => product.id == productId); // Prende le informazioni del prodotto.  == e non === perché a quanto pare l'id dell'API non è in number ma in string
  if (!selectedProduct)
    return;
  let productInCart = productCart.find(product => product.id == productId); // Controlla se è nel carrello
  if (productInCart)
  {
    productInCart.quantity = (productInCart.quantity || 1) + 1; // Se lo è aumenta la sua quantità
  } else
  {
    const productToAdd = { ...selectedProduct, quantity: 1 }; // Altrimenti crea una copia e setta la quantità a 1
    productCart.push(productToAdd); // Lo mette nel carrello
  }
  localStorage.setItem("cart", JSON.stringify(productCart));
  displayCartProducts(productCart);
}

function subtotalCart(products) 
{
  let subtotal = 0;
  products.forEach(product =>
  {
    subtotal += product.price * product.quantity;
  });
  return subtotal;
}

function shippingCost(subtotal) 
{
  if (subtotal <= 0)
    return "0€"
  else if (subtotal <= 50)
    return "15€";
  else
    return "Gratis";
}

function total(subtotal)
{
  let result = (subtotal < 50 && subtotal > 0) ? subtotal + 15 : subtotal;
  return parseFloat(result.toFixed(2));
}

function removeFromCart(productId)
{
  productCart = productCart.filter(product => product.id != productId);
  localStorage.setItem("cart", JSON.stringify(productCart));
  displayCartProducts(productCart);
}

function updateQuantity(productId, change)
{
  let product = productCart.find(product => product.id == productId);
  if (product)
  {
    product.quantity += change;
    if (product.quantity < 0)
    {
      removeFromCart(productId);
    } else
    {
      localStorage.setItem("cart", JSON.stringify(productCart));
      displayCartProducts(productCart);
    }
  }
}

document.addEventListener("DOMContentLoaded", () =>
{
  productCart = JSON.parse(localStorage.getItem("cart")) || [];
  displayCartProducts(productCart);
});

document.getElementById("checkoutBtn").addEventListener("click", function (e) { e.preventDefault(); });