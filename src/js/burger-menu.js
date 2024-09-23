document.addEventListener("DOMContentLoaded", function () {
  const sidebarMenu = document.querySelector(".header__sidebar-mob");
  const burgerBtn = document.querySelector(".header__burger");
  const closeBtn = document.querySelector(".header__sidebar-close");

  burgerBtn.addEventListener("click", () => {
    document.body.classList.add("menu-open");
    sidebarMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
    sidebarMenu.classList.remove("active");
  });

  // clear listeners
  window.addEventListener("beforeunload", () => {
    removeAllListeners(burgerBtn, "click");
    removeAllListeners(closeBtn, "click");
  });
});
