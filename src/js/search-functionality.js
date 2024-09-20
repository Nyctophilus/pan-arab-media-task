document.addEventListener("DOMContentLoaded", function () {
  const searchWrapper = document.querySelector(".header-right .search");
  const search_IconBtn = document.querySelector(".search-icon");
  const search_CloseBtn = document.querySelector(".close-icon");

  search_IconBtn.addEventListener("click", () => {
    searchWrapper.classList.add("active");
  });
  search_CloseBtn.addEventListener("click", () => {
    searchWrapper.classList.remove("active");
  });
});
