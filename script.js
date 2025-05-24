// Navigate on nav-button click
document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = button.dataset.page;
  });
});

// Highlight active nav button based on current page URL
document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-button').forEach(button => {
    if (button.dataset.page.toLowerCase() === currentPage.toLowerCase()) {
      button.classList.add('active-button');
    }
  });
});
