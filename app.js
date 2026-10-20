document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const navLinks = document.querySelector(".nav-links");
  if (menuButton && navLinks) {
    menuButton.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }
  document.querySelectorAll("[data-search]").forEach(input => {
    const target = document.getElementById(input.dataset.search);
    if (!target) return;
    const items = [...target.querySelectorAll("[data-filter-item]")];
    input.addEventListener("input", () => {
      const query = input.value.trim().toLocaleLowerCase();
      let visible = 0;
      items.forEach(item => {
        const match = item.textContent.toLocaleLowerCase().includes(query);
        item.hidden = !match;
        if (match) visible++;
      });
      const empty = target.querySelector("[data-empty]");
      if (empty) empty.hidden = visible !== 0;
    });
  });
});
