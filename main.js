
  const loginBtn = document.getElementById("loginBtn");
  const errorMsg = document.getElementById("error-message");

  loginBtn.addEventListener("click", () => {
    const inputs = document.querySelectorAll(".login-box input");
    const username = inputs[0].value.trim();
    const password = inputs[1].value.trim();

    if (!username || !password) {
      errorMsg.textContent = "⚠️ Please fill in both fields.";
      return;
    }

    // ✅ If both fields filled, allow login
    errorMsg.textContent = "";
    window.location.href = "home.html";
  });

document.querySelectorAll('.login-box input').forEach(input => {
    input.addEventListener('click', () => {
      input.classList.remove('wave-animate'); 
      void input.offsetWidth; 
      input.classList.add('wave-animate');
    });
  });
