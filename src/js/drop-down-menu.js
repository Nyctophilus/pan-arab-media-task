document.addEventListener("DOMContentLoaded", function () {
  const ddmToggler = document.querySelector(".ddm");

  ddmToggler.addEventListener("click", () => {
    ddmToggler.classList.toggle("active");
  });

  window.addEventListener("beforeunload", () => {
    removeAllListeners(ddmToggler, "click");
  });
});


