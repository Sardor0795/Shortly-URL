window.addEventListener("DOMContentLoaded", () => {
  const elJsInputForm = document.querySelector(".js-input__form");
  const elJsResult = document.querySelector(".js-result");
  const elScrollUpBtn = document.querySelector(".scrollUpBtn");
  const elsReveal = document.querySelectorAll(".reveal");

  if (elJsInputForm) {
    elJsInputForm.addEventListener("submit", function (e) {
      e.preventDefault();
      elJsResult.classList.add("result--open");
    });
  }

  if (elJsResult) {
    elJsResult.addEventListener("click", function (e) {
      if (e.target.matches(".js-copy-btn")) {
        e.target.textContent = "Copied";
        e.target.classList.add("btn-copied");

        navigator.clipboard.writeText(
          e.target.previousElementSibling.textContent
        );

        setTimeout(function () {
          e.target.textContent = "Copy";
          e.target.classList.remove("btn-copied");
        }, 1000);
      }
    });
  }

  window.addEventListener("scroll", () => {
    elScrollUpBtn.classList.toggle("active", window.scrollY > 400);
  });

  if (elScrollUpBtn) {
    elScrollUpBtn.addEventListener("click", () => {
      window.scroll(0, 0);
    });
  }

  window.addEventListener("scroll", () => {
    elsReveal.forEach((v) => {
      let revealHeight = 50;
      let windowHeight = window.innerHeight;
      let elTopRect = v.getBoundingClientRect().top;

      v.classList.toggle("active", elTopRect < windowHeight - revealHeight);
    });
  });
});
