
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

    deleteButton.addEventListener("click", function ()
    {
        const confirmDelete = confirm("Sei sicuro di voler eliminare il tuo account? Questa azione è irreversibile!");
        if (confirmDelete)
        {
            alert("Account eliminato con successo!"); // Qui puoi chiamare un'API per la cancellazione effettiva.
            // window.location.href = "logout.html"; // Reindirizza l'utente se necessario
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const deleteButton = document.getElementById("deleteAccountButton");

    deleteButton.addEventListener("click", function () {
        const confirmDelete = confirm("Sei sicuro di voler eliminare il tuo account? Questa azione è irreversibile!");

        if (confirmDelete) {
            const userId = getUserId(); // Ottieni l'ID dell'utente

            fetch(`/utenti/${userId}`, {  // Chiamata DELETE
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(data => {
                if (data.messaggio) {  // Se l'eliminazione è andata a buon fine
                    alert(data.messaggio);
                    window.location.href = "/logout"; // Reindirizza l'utente dopo la cancellazione
                } else {
                    alert(data.errore || "Errore durante l'eliminazione dell'account.");
                }
            })
            .catch(error => console.error('Errore:', error));
        }
    });
});

