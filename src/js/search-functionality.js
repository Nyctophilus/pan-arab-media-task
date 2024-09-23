const searchWrapper = document.querySelector(".header-right .search");
const search_IconBtn = document.querySelector(".search-icon");
const search_CloseBtn = document.querySelector(".close-icon");

// add event listeners
search_IconBtn.addEventListener("click", search_IconBtn_ClickHandler);
search_CloseBtn.addEventListener("click", search_CloseBtn_ClickHandler);

// clear listeners
window.addEventListener("beforeunload", () => {
  removeAllListeners(search_IconBtn, "click");
  removeAllListeners(search_CloseBtn, "click");
});

// functions
function search_IconBtn_ClickHandler() {
  searchWrapper.classList.add("active");
}
function search_CloseBtn_ClickHandler() {
  searchWrapper.classList.remove("active");
}

// [ ] debounce the search input
