var innerLinks = document.querySelectorAll(".item-button-buy");
var innerPopup = document.querySelector(".modal-cart");
var innerClose = innerPopup.querySelector(".close-button");

innerClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  innerPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (innerPopup.classList.contains("modal-show")) {
      innerPopup.classList.remove("modal-show");
    }
  }
});
for (var i = 0; i < innerLinks.length; i++) {
  innerLinks[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    innerPopup.classList.add("modal-show");

  });
}