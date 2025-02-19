function displayDetails(utenti)
{
    let utenteArray = [utenti];
    const utente = utenteArray
        .map((utente) =>
        {
            return `
          
    <div class="col-md-8">
    <div class="card mb-3">
        <div class="card-body">
            <div class="row">
                <div class="col-sm-3">
                    <h6 class="mb-0">Nome</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                    <input type="text" id="nome" class="form-control" value="${utente.nome}" disabled>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col-sm-3">
                    <h6 class="mb-0">Cognome</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                    <input type="text" id="cognome" class="form-control" value="${utente.cognome}" disabled>
                </div>
            </div>
            <hr>

            <div class="row">
                <div class="col-sm-3">
                    <h6 class="mb-0">Partita Iva</h6>
                </div>
                <div class="col-sm-9 text-secondary">
                    <input type="text" id="pIva" class="form-control" value="${utente.pIva}" disabled>
                </div>
            </div>
            <hr>
            <hr>
            <div class="row">
                <div class="col-sm-12 d-flex justify-content-between">
                    <button id="editButton" class="btn btn-danger">Edit</button>
                    <button id="deleteAccountButton" class="btn btn-danger">Elimina Account</button>
                </div>
            </div>
        </div>
    </div>
</div> 
            `;
        })
        .join("");
    document.getElementById("container-gutter").innerHTML = utente;

    const deleteButton = document.getElementById("deleteAccountButton");
    deleteButton.addEventListener("click", function () {
        const confirmDelete = confirm("Sei sicuro di voler eliminare il tuo account? Questa azione è irreversibile!");
        if (confirmDelete) {
            const token = localStorage.getItem("authToken");

            fetch("http://localhost:8080/utenti/cancellaUtente", {  // Chiamata DELETE
                method: 'DELETE',
                headers: {
                    "Authorization": "Bearer " + token,
                    "Content-Type": "application/json",
                  },
            })
            .then(response => response.json())
            .then(data => {
                if (data.messaggio) {  // Se l'eliminazione è andata a buon fine
                    alert(data.messaggio);
                    localStorage.clear();
                    window.location.href = "../Homepage/homepage.html"; // Reindirizza l'utente dopo la cancellazione
                } else {
                    alert(data.errore || "Errore durante l'eliminazione dell'account.");
                }
            })
            .catch(error => console.error('Errore:', error));
        }
    });

    const editButton = document.getElementById("editButton");
    editButton.addEventListener("click", function () {
        const inputs = document.querySelectorAll("input");
        if (editButton.innerText.trim() === "Edit") {
            inputs.forEach(input => input.removeAttribute("disabled"));
            editButton.innerText = "Save";
        } else {
            // Raccoglie i dati aggiornati in un oggetto
            const updatedData = {};
            inputs.forEach(input => {
                if (input.id === "pIva" && input.value.trim() === "" || input.value === "null") {
                    updatedData[input.id] = null; // Invia null se il campo è vuoto
                } else {
                    updatedData[input.id] = input.value;
                }
            });
            // Disabilita nuovamente gli input e ripristina il testo del pulsante
            inputs.forEach(input => input.setAttribute("disabled", true));
            editButton.innerText = "Edit";
            const token = localStorage.getItem("authToken");
            fetch("http://localhost:8080/utenti/modificaProfilo", {
              method: "PUT",
              headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedData)
            })
              .then(response => {
                if (!response.ok) {
                  throw new Error("Errore nella richiesta");
                }
                return response.json();
              })
              .then(result => {
                console.log("Dati aggiornati:", result);
              })
              .catch(error => console.error("Errore aggiornamento dati:", error));
          }
    });
}

function fetchDettagliUtente()
{
    const token = localStorage.getItem("authToken");
    fetch("http://localhost:8080/utenti/dettagli", {
        method: "GET",
        headers: {
            "Authorization": "Bearer " + token, // Invia il token
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then((utenti) =>
        {
            console.log(utenti);
            displayDetails(utenti);
        })
        .catch((error) => console.error("Errore nel recupero dei dettagli utente", error));
}

document.addEventListener("DOMContentLoaded", () =>
{
    fetchDettagliUtente();
});
