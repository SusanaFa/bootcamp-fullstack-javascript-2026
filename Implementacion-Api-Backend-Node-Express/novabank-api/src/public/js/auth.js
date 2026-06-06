const API_URL = "/api/v1";

const showResult = (elementId, data) => {
  const element = document.getElementById(elementId);

  if (element) {
    element.textContent = JSON.stringify(data, null, 2);
  }
};

const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const userData = {
      fullName: document.getElementById("fullName").value,
      rut: document.getElementById("rut").value,
      address: document.getElementById("address").value,
      phone: document.getElementById("phone").value,
      email: document.getElementById("registerEmail").value,
      password: document.querySelector("#registerPassword").value,
    };

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      showResult("registerResult", data);

      if (data.ok) {
        registerForm.reset();
      }
    } catch (error) {
      showResult("registerResult", {
        ok: false,
        message: "Error al registrar usuario",
      });
    }
  });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const credentials = {
      email: document.getElementById("loginEmail").value,
      password: document.getElementById("loginPassword").value,
    };

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      showResult("loginResult", data);

      if (data.ok) {
        localStorage.setItem("token", data.data.token);
        loginForm.reset();
      }
    } catch (error) {
      showResult("loginResult", {
        ok: false,
        message: "Error al iniciar sesión.",
      });
    }
  });
}
