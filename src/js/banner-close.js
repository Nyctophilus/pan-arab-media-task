document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".break-news__close").addEventListener("click", () => {
    document.querySelector(".break-news__banner").remove();
  });
});
