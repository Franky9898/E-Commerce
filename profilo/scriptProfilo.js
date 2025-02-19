document.addEventListener("DOMContentLoaded", function () {
    const editButton = document.getElementById("editButton");
    const inputs = document.querySelectorAll("input");

    editButton.addEventListener("click", function () {
        if (editButton.innerText === "Edit") {
            inputs.forEach(input => input.removeAttribute("disabled")); // Rendi modificabili i campi
            editButton.innerText = "Save"; // Cambia testo pulsante
        } else {
            inputs.forEach(input => input.setAttribute("disabled", true)); // Disabilita modifiche
            editButton.innerText = "Edit"; // Ripristina pulsante originale

            // Simula il salvataggio dei dati (qui si potrebbe inviare a un backend)
            console.log("Dati aggiornati:");
            inputs.forEach(input => console.log(input.id + ": " + input.value));
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const deleteButton = document.getElementById("deleteAccountButton");

    deleteButton.addEventListener("click", function () {
        const confirmDelete = confirm("Sei sicuro di voler eliminare il tuo account? Questa azione è irreversibile!");
        if (confirmDelete) {
            alert("Account eliminato con successo!"); // Qui puoi chiamare un'API per la cancellazione effettiva.
            // window.location.href = "logout.html"; // Reindirizza l'utente se necessario
        }
    });
});

