document.querySelectorAll('.login-box input').forEach(input => {
    input.addEventListener('click', () => {
      input.classList.remove('wave-animate'); 
      void input.offsetWidth; 
      input.classList.add('wave-animate');
    });
  });
