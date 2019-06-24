var mapLink = document.querySelector(".map-index");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".close-button");
var indexLink = document.querySelector(".main-contacts-link");
var indexPopup = document.querySelector(".modal-write-us");
var indexClose = indexPopup.querySelector(".close-button");
var form = indexPopup.querySelector(".write-us");
var nameInput = indexPopup.querySelector(".user-name");
var email = indexPopup.querySelector("#user-e-mail");
var letter = indexPopup.querySelector("textarea");





mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-show");

});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});


indexLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  indexPopup.classList.add("modal-show");
  nameInput.focus();
});

indexClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  indexPopup.classList.remove("modal-show");
  indexPopup.classList.remove("modal-error");

});

window.addEventListener("keydown", function (evt) {

  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
    if (indexPopup.classList.contains("modal-show")) {
      indexPopup.classList.remove("modal-show");
    }
  }
});
form.addEventListener("submit", function (evt) {
  if (!nameInput.value || !email.value || !letter.value) {
    evt.preventDefault();
    indexPopup.classList.add("modal-error");
  }
});



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
