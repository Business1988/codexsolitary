document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  if (page) {
    const active = document.querySelector(`[data-nav="${page}"]`);
    if (active) active.classList.add("is-active");
  }
});
