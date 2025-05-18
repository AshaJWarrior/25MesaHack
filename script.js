function goToPage(page) {
  window.location.href = page;
}

document.querySelectorAll('.nav-button').forEach(button => {
  const page = button.getAttribute('data-page');
  button.onclick = () => goToPage(page);

  if (window.location.pathname.endsWith(page)) {
    button.classList.add('active-button');
  }
});
