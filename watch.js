document.querySelectorAll('.menu-filters button').forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    // Update active class
    document.querySelectorAll('.menu-filters button').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Show/hide items
    document.querySelectorAll('.menu-item').forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
