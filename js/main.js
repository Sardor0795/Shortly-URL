window.addEventListener("DOMContentLoaded", () => {
  const elJsInputForm = document.querySelector(".js-input__form");
  const elJsResult = document.querySelector(".js-result");
  const elBtnCopy = document.querySelector(".js-copy-btn");

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
});
