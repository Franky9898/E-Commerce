document
  .getElementById("showLogin")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("registerForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("avvisoSignup").style.display = "none";
  });

// Funzione per effettuare il login
function login(email, password) {
  fetch("http://localhost:8080/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Login fallito");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Login effettuato:", data);
      // Salva il token nel localStorage
      if (data.token) {
        localStorage.setItem("authToken", data.token);
      }
    })
    .catch((error) => {
      console.error("Errore nel login:", error);
    });
}

// Gestione del form di login
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  });

function registerUser(newUser) {
  fetch("http://localhost:8080/utenti", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Risposta registrazione:", data);
      document.getElementById("registerOutput").innerText = data.message;
    })
    .catch((error) => {
      console.error("Errore nella registrazione:", error);
      document.getElementById("registerOutput").innerText =
        "Errore durante la registrazione";
    });
}

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const newUser = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      partitaIva: document.getElementById("iva").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    registerUser(newUser);
  });
