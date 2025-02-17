const cart = JSON.parse(localStorage.getItem("cart")) || [];
if (cart.length === 0)
{
    alert("Il carrello è vuoto!");
    return;
}

const subtotal = subtotalCart(cart);
const shipping = shippingCost(subtotal);
const totalAmount = total(subtotal);

const orderPayload =
{
    date: new Date().toISOString(),
    totale: totalAmount,
    utente: {
        id: user.id,
    },
    prodotti: cart
};

fetch('http://localhost:8080/ordini', {
    method: 'POST',
    headers:
    {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(orderPayload)
})
    .then(response =>
    {
        if (response.ok)
        {
            return response.json();
        } else
        {
            throw new Error("Errore durante il salvataggio dell'ordine.");
        }
    })
    .then(data =>
    {
        localStorage.removeItem("cart");
        alert("Ordine salvato con successo!");
    })
    .catch(error =>
    {
        console.error("Errore:", error);
        alert("Si è verificato un errore durante il salvataggio dell'ordine.");
    });

