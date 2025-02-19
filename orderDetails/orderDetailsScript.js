document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("orderDetails.html")) {
        fetchOrders();
    }

    const pagamentoButton = document.getElementById("bottonePagamento");
    if (pagamentoButton) {
        pagamentoButton.addEventListener("click", saveOrder);
    }
});

// POST
function saveOrder() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Il carrello è vuoto!");
        return;
    }

    const subtotal = subtotalCart(cart);
    const shipping = shippingCost(subtotal);
    const totalAmount = total(subtotal);

    const orderPayload = {
        date: new Date().getTime(),
        totale: totalAmount,
        prodotti: cart
    };
    const token = localStorage.getItem("authToken");
    fetch("http://localhost:8080/ordini", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(orderPayload)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Errore durante il salvataggio dell'ordine.");
        }
    })
    .then(data => {
        localStorage.removeItem("cart");
        alert("Ordine salvato con successo!");
        window.location.href = "../orderDetails/orderDetails.html";
    })
    .catch(error => {
        console.error("Errore:", error);
        alert("Si è verificato un errore durante il salvataggio dell'ordine.");
    });
}

// GET
function fetchOrders() {
    const token = localStorage.getItem("authToken"); 

    if (!token) {
        console.error("Token non presente, l'utente deve essere autenticato.");
        alert("Errore: Devi essere autenticato per vedere gli ordini.");
        return;
    }

    fetch("http://localhost:8080/ordini/dettagliOrdini", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Errore nel recupero degli ordini.");
        }
        return response.json();
    })
    .then(data => {
        const ordersAccordion = document.getElementById("ordersAccordion");

        if (!ordersAccordion) {
            console.error("Elemento 'ordersAccordion' non trovato.");
            return;
        }

        if (data.length === 0) {
            ordersAccordion.innerHTML = "<p>Nessun ordine trovato.</p>";
            return;
        }

        data.forEach((order, index) => {
            const accordionItem = document.createElement("div");
            accordionItem.classList.add("accordion-item");

            const headerId = `heading${index}`;
            const collapseId = `collapse${index}`;
            const orderDate = new Date(order.date).toLocaleDateString("it-IT");

            const headerHTML = `
                <h2 class="accordion-header" id="${headerId}">
                    <button class="accordion-button ${index !== 0 ? "collapsed" : ""}" type="button" data-bs-toggle="collapse" data-bs-target="#${collapseId}" aria-expanded="${index === 0 ? "true" : "false"}" aria-controls="${collapseId}">
                        Ordine #${order.id} - Data: ${orderDate} - Totale: €${Number(order.totale).toFixed(2)}
                    </button>
                </h2>
            `;
            
            const prodottiHTML = order.prodotti.map(prod =>
                `<li class="list-group-item">${prod.title} - €${Number(prod.price).toFixed(2)}</li>`
            ).join("");

            const bodyHTML = `
                <div id="${collapseId}" class="accordion-collapse collapse ${index === 0 ? "show" : ""}" aria-labelledby="${headerId}" data-bs-parent="#ordersAccordion">
                    <div class="accordion-body">
                        <h5>Prodotti Ordinati:</h5>
                        <ul class="list-group">
                            ${prodottiHTML}
                        </ul>
                    </div>
                </div>
            `;

            accordionItem.innerHTML = headerHTML + bodyHTML;
            ordersAccordion.appendChild(accordionItem);
        });
    })
    .catch(error => {
        console.error("Errore:", error);
        alert("Si è verificato un errore nel recuperare gli ordini.");
    });
}


