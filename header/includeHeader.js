document.write(`
    <div class="header" id="divHeader">
           <nav class="header header navbar navbar-expand-md">
               <div class="header container">
                   <!-- Logo -->
                   <a class="header navbar-brand" href="../Homepage/homepage.html"><img src="../Homepage/techtab.png" width="50px" height="50px" alt="logo"></a>
                   <button class="header navbar-toggler" type="button" data-bs-toggle="collapse"
                       data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                       aria-expanded="false" aria-label="Toggle navigation">
                       <span class="header navbar-toggler-icon">
                           <i class="header fa-solid fa-bars fa-lg"></i>
                       </span>
                   </button>
                   <!-- Barra di ricerca-->
                   <div class="header collapse navbar-collapse" id="navbarSupportedContent">
                       <form class="header d-flex justify-content-end w-100" role="search">
                           <input class="header form-control me-2" type="search" placeholder="Search"
                               aria-label="Search">
                           <button class="header btn btn-outline-success" type="submit">Search</button>
                       </form>
                       <!-- Icone, flex-column serve per mettere in verticale gli items quando collassa, flex-md-row per metterli in riga quando lo schermo è medio-->
                       <div
                           class="header d-flex align-items-start align-items-md-center me-auto flex-column flex-md-row">
                           <div id="user-container" class="header d-flex align-items-center mt-2 ms-2 mb-2 mb-md-0 mt-md-0 ms-md-4">

                           </div>
                           <div class="header d-flex align-items-center ms-2 mb-2 mb-md-0 mt-md-0">
                               <button id="cart-button"
                                   class="header btn btn-outline-success d-inline-flex align-items-center justify-content-center" onclick="window.location.href = '../shoppingCart/cart.html';">
                                   <i class="header fa-solid fa-cart-shopping fa-lg pe-2"></i>
                                   Carrello
                               </button>

                            </div>
                            <!-- Dropdown Menu per i bottoni su schermi piccoli -->
                            <ul class="header navbar-nav ms-2 mb-2 mb-md-0 d-md-none">
                                <li class="header nav-item dropdown">
                                    <button class="header dropdown-toggle btn btn-primary text-center"
                                        style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                                        type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        Menu Categorie
                                    </button>
                                    <!-- Bottoni dentro il bottone -->
                                    <ul class="header dropdown-menu">
                                        <button class="header dropdown-toggle btn btn-primary  text-center"
                                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                                            type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Gioielli
                                        </button>
                                        <ul class="header dropdown-menu">
                                            <li><a class="header dropdown-item" href="../products-page/index.html?filter=jewelery">Bracciali</a></li>
                                            <li><a class="header dropdown-item" href="../products-page/index.html?filter=jewelery">Anelli</a></li>
                                            <li><a class="header dropdown-item" href="../products-page/index.html?filter=jewelery">Orecchini</a></li>
                                        </ul>
                                        <button class="header dropdown-toggle btn btn-primary  text-center"
                                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                                            type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Elettronica
                                        </button>
                                        <ul class="header dropdown-menu">
                                            <li><a class="header dropdown-item" href="../products-page/index.html?filter=electronics">Hard disk</a></li>
                                            <li><a class="header dropdown-item" href="../products-page/index.html?filter=electronics">Monitor</a></li>
                                            <li><a class="header dropdown-item" href="../products-page/index.html?filter=electronics">Computer</a></li>
                                        </ul>
                                        <button class="header dropdown-toggle btn btn-primary  text-center"
                                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                                            type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Vestiti Uomo
                                        </button>
                                        <ul class="header dropdown-menu">
                                            <li><a class="header dropdown-item" href="../products-page/index.html?filter=men's clothing">Magliette</a></li>
                                            <li><a class="header dropdown-item" href="../products-page/index.html?filter=men's clothing">Giacche</a></li>
                                            <li><a class="header dropdown-item" href="../products-page/index.html?filter=men's clothing">Mutande</a></li>
                                        </ul>
                                        <button class="header dropdown-toggle btn btn-primary  text-center"
                                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                                            type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            Vestiti Donna
                                        </button>
                                        <ul class="header dropdown-menu">
                                            <li><a class="header dropdown-item" href="../products-page/index.html?filter=women's clothing">Magliette</a></li>
                                            <li><a class="header dropdown-item" href="../products-page/index.html?filter=women's clothing">Giacche</a></li>
                                            <li><a class="header dropdown-item" href="../products-page/index.html?filter=women's clothing">Sciarpe</a></li>
                                        </ul>
                                        <button class="header dropdown-toggle btn btn-primary  text-center"
                                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                                            type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            bottone Grosso
                                        </button>
                                        <ul class="header dropdown-menu">
                                            <li><a class="header dropdown-item" href="#">Action 1</a></li>
                                            <li><a class="header dropdown-item" href="#">Action</a></li>
                                            <li><a class="header dropdown-item" href="#">Action</a></li>
                                        </ul>
                                        <button class="header dropdown-toggle btn btn-primary  text-center"
                                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                                            type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            bottone Grosso
                                        </button>
                                        <ul class="header dropdown-menu">
                                            <li><a class="header dropdown-item" href="#">Action 1</a></li>
                                            <li><a class="header dropdown-item" href="#">Action</a></li>
                                            <li><a class="header dropdown-item" href="#">Action</a></li>
                                        </ul>
                                        <button class="header dropdown-toggle btn btn-primary  text-center"
                                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                                            type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            bottone Grosso
                                        </button>
                                        <ul class="header dropdown-menu">
                                            <li><a class="header dropdown-item" href="#">Action 1</a></li>
                                            <li><a class="header dropdown-item" href="#">Action</a></li>
                                            <li><a class="header dropdown-item" href="#">Action</a></li>
                                        </ul>
                                        <button class="header dropdown-toggle btn btn-primary  text-center"
                                            style="--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;"
                                            type="button" data-bs-auto-close="outside" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            bottone Grosso
                                        </button>
                                        <ul class="header dropdown-menu">
                                            <li><a class="header dropdown-item" href="#">Action 8</a></li>
                                            <li><a class="header dropdown-item" href="#">Action</a></li>
                                            <li><a class="header dropdown-item" href="#">Action</a></li>
                                        </ul>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- Seconda riga con i bottoni-->
            <nav class="header d-none d-md-flex navbar navbar-expand-md  ">
                <div class="header container-fluid">
                    <ul class="header navbar-nav me-auto mb-md-0 mx-auto">
                        <li class="header nav-item dropdown mx-1">
                            <a class="header nav-link dropdown-toggle px-0" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Gioielli
                            </a>
                            <div class="header dropdown-menu">
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Bracciali</a></li>
                                    <li><a class="header dropdown-item" href="#">Bracciale 1</a></li>
                                    <li><a class="header dropdown-item" href="#">Bracciale 2</a></li>
                                    <li><a class="header dropdown-item" href="#">Bracciale 3</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Anelli</a></li>
                                    <li><a class="header dropdown-item" href="#">Anello 1</a></li>
                                    <li><a class="header dropdown-item" href="#">Anello 2</a></li>
                                    <li><a class="header dropdown-item" href="#">Anello 3</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Orecchini</a></li>
                                    <li><a class="header dropdown-item" href="#">Orecchini 1</a></li>
                                    <li><a class="header dropdown-item" href="#">Orecchini 2</a></li>
                                    <li><a class="header dropdown-item" href="#">Orecchini 3</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="header nav-item dropdown mx-1">
                            <a class="header nav-link dropdown-toggle px-0" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Elettronica
                            </a>
                            <div class="header dropdown-menu">
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Hard Disk</a></li>
                                    <li><a class="header dropdown-item" href="#">HDD 1</a></li>
                                    <li><a class="header dropdown-item" href="#">SSD</a></li>
                                    <li><a class="header dropdown-item" href="#">HDD 2</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Monitor</a></li>
                                    <li><a class="header dropdown-item" href="#">Monitor</a></li>
                                    <li><a class="header dropdown-item" href="#">TV 1</a></li>
                                    <li><a class="header dropdown-item" href="#">Tv 2</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Computer</a></li>
                                    <li><a class="header dropdown-item" href="#">Desktop</a></li>
                                    <li><a class="header dropdown-item" href="#">Notebook 1</a></li>
                                    <li><a class="header dropdown-item" href="#">Notebook 2</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="header nav-item dropdown mx-1">
                            <a class="header nav-link dropdown-toggle px-0" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Vestiti Donna
                            </a>
                            <div class="header dropdown-menu">
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Magliette</a></li>
                                    <li><a class="header dropdown-item" href="#">Maglietta 1</a></li>
                                    <li><a class="header dropdown-item" href="#">Maglietta 2</a></li>
                                    <li><a class="header dropdown-item" href="#">Maglietta 3</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Giacche</a></li>
                                    <li><a class="header dropdown-item" href="#">Giacca 1</a></li>
                                    <li><a class="header dropdown-item" href="#">Giacca 2</a></li>
                                    <li><a class="header dropdown-item" href="#">Giacca 3</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Scarpe</a></li>
                                    <li><a class="header dropdown-item" href="#">Scarpe 1</a></li>
                                    <li><a class="header dropdown-item" href="#">Scarpe 2</a></li>
                                    <li><a class="header dropdown-item" href="#">Scarpa</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="header nav-item dropdown mx-1">
                            <a class="header nav-link dropdown-toggle px-0" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Vestiti Uomo
                            </a>
                            <div class="header dropdown-menu">
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Magliette</a></li>
                                    <li><a class="header dropdown-item" href="#">Maglietta 1</a></li>
                                    <li><a class="header dropdown-item" href="#">Maglietta 2</a></li>
                                    <li><a class="header dropdown-item" href="#">Maglietta 3</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Giacche</a></li>
                                    <li><a class="header dropdown-item" href="#">Giacca 1</a></li>
                                    <li><a class="header dropdown-item" href="#">Giacca 2</a></li>
                                    <li><a class="header dropdown-item" href="#">Giacca 3</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Mutande</a></li>
                                    <li><a class="header dropdown-item" href="#">Mutande 1</a></li>
                                    <li><a class="header dropdown-item" href="#">Mutande 2</a></li>
                                    <li><a class="header dropdown-item" href="#">Mutande 3</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="header nav-item dropdown mx-1">
                            <a class="header nav-link dropdown-toggle px-0" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="header dropdown-menu">
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Another action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Something else here</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="header nav-item dropdown mx-1">
                            <a class="header nav-link dropdown-toggle px-0" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="header dropdown-menu">
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Another action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Something else here</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="header nav-item dropdown mx-1">
                            <a class="header nav-link dropdown-toggle px-0" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="header dropdown-menu">
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Another action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Something else here</a></li>
                                    <li><a class="header dropdown-item" href="#">Action 7</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                </ul>
                            </div>
                        </li>
                        <li class="header nav-item dropdown mx-1">
                            <a class="header nav-link dropdown-toggle px-0" href="#" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <div class="header dropdown-menu">
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Another action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                </ul>
                                <ul class="header big-menu">
                                    <li><a class="header dropdown-item" href="#">Something else here</a></li>
                                    <li><a class="header dropdown-item" href="#">Action 8</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                    <li><a class="header dropdown-item" href="#">Action</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div id="divisoreHeader" style="height: 150px;">

        </div>
`);

document.addEventListener("DOMContentLoaded", updateUserUI);

function updateUserUI() {
  const userContainer = document.getElementById("user-container");
  if (!userContainer) return;

  const token = localStorage.getItem("authToken");

  if (token) {
    // Se l'utente è autenticato, mostra il dropdown
    userContainer.innerHTML = `
            <div class="dropdown">
                <button class="header btn btn-outline-success dropdown-toggle d-inline-flex align-items-center" style="height=;height: 42px;"
                    type="button" id="profile-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="header fa-solid fa-user fa-lg pe-2"></i>
                </button>
                <ul class="dropdown-menu" aria-labelledby="profile-dropdown">
                    <li><a class="access-btn dropdown-item" href="../orderDetails/orderDetails.html">I miei ordini</a></li>
                    <li><a class="access-btn dropdown-item" href="../profilo/profilo.html">Profilo</a></li>
                    <li><button class="access-btn dropdown-item" id="logout-btn">Logout</button></li>
                </ul>
            </div>
        `;

    // Event listener per il logout
    document.getElementById("logout-btn").addEventListener("click", async () => {
        const token = localStorage.getItem("authToken");

        if (!token) return;

        try {
          const response = await fetch("http://localhost:8080/api/logout", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            localStorage.removeItem("authToken"); // Rimuove il token dal localStorage solo se il logout è andato a buon fine
            updateUserUI(); // Aggiorna l'interfaccia utente
          } else {
            console.error("Errore nel logout:", await response.json());
          }
        } catch (error) {
          console.error("Errore di connessione:", error);
        }
      });
  } else {
    // Se l'utente non è autenticato, mostra il bottone di login
    userContainer.innerHTML = `
            <button id="login-btn" type="button" onclick="window.location.href='../form-registrazione/index.html'" class="header btn btn-outline-success d-inline-flex align-items-center justify-content-center">
                <i class="header fa-solid fa-user fa-lg pe-2"></i> Login
            </button>

        `;

    //     <button id="user-button" type="button"
    //     class="header btn btn-outline-success d-inline-flex align-items-center justify-content-center">
    //     <i class="header fa-solid fa-user fa-lg pe-2"></i>
    //     Login
    // </button>

    // Aggiungi l'event listener per il login simulato
    // document.getElementById("login-btn").addEventListener("click", () => {
    //   localStorage.setItem("authToken", "token-di-esempio"); // Qui metteresti il vero token ricevuto dal backend
    //   updateUserUI();
    // });
  }
}

//Funzione per non far sovrapporre il big-menu con il contenuto delle pagine
document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".nav-item.dropdown.mx-1"); // Seleziona tutti i pulsanti dropdown
  const divSep = document.getElementById("divisoreHeader");
  let openDropdown = null; // Tiene traccia di quale menù è aperto (una boolean non funziona per qualche motivo)
  if (menuItems.length > 0) {
    menuItems.forEach((menuItem) => {
      menuItem.addEventListener("click", function () {
        if (window.innerWidth >= 768) {
          if (openDropdown === menuItem) {
            divSep.style.height = "150px"; // Il div si riduce
            openDropdown = null;
          } else {
            divSep.style.height = "370px"; // Il div si allarga
            openDropdown = menuItem;
          }
        }
      });
    });
  }
  window.addEventListener(
    "resize",
    function () // Quando la finestra si riduce, il div si riduce a prescindere
    {
      if (window.innerWidth < 768) {
        divSep.style.height = "150px";
        openDropdown = null;
      }
    }
  );
});

document.addEventListener("DOMContentLoaded", function () {
  // Funzione per ottenere i parametri query dall'URL
  function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }

  const category = getQueryParam("filter");
  console.log("Filter query parameter:", category);
  if (category) {
    const checkbox = document.querySelector(
      `input[name="filter"][value="${category}"]`
    );
    if (checkbox) {
      checkbox.checked = true;
      checkbox.dispatchEvent(new Event("change", { bubbles: true })); // Triggera manualmente l'evento onchange
    }
    fetchProductsByCategories(category);
  } else {
    fetchAllProducts();
  }
});
