document.addEventListener("DOMContentLoaded", function () {
  const closeBtn = document.querySelector(".break-news__close");
  closeBtn.addEventListener("click", () => {
    document.querySelector(".break-news__banner").remove();
  });

  window.addEventListener("beforeunload", () => {
    removeAllListeners(closeBtn, "click");
  });
});
