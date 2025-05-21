function goToPage(page) {
  window.location.href = page;
}
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-button").forEach(btn => {
    if (btn.dataset.page === currentPage) {
      btn.classList.add("active-button");
    }
  });
});
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