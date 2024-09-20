document.addEventListener("DOMContentLoaded", function () {
  const sidebarMenu = document.querySelector(".header__sidebar-mob");

  document.querySelector(".header__burger").addEventListener("click", () => {
    document.body.classList.add("menu-open");
    sidebarMenu.classList.add("active");
  });

  document
    .querySelector(".header__sidebar-close")
    .addEventListener("click", () => {
      document.body.classList.remove("menu-open");
      sidebarMenu.classList.remove("active");
    });
});
