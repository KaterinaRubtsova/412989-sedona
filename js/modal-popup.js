var searchHotelsButton = document.querySelector(".search-hotels-button");
var modalShow = document.querySelector(".booking-box");
var form = document.querySelector("form");
var checkinDate = document.querySelector("#checkin-date");
var checkoutDate = document.querySelector("#checkout-date");
var adults = document.querySelector("#number-of-adults");
var children = document.querySelector("#number-of-children");
var storageAdults = localStorage.getItem("adults");
var storageChildren = localStorage.getItem("children");

searchHotelsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalShow.classList.add("booking-box-hide");
});
searchHotelsButton.addEventListener("click", function (evt) {
  if (modalShow.classList.contains("booking-box-hide")) {
    modalShow.classList.toggle("booking-box-hide");
    modalShow.classList.toggle("booking-box-show");
    modalShow.classList.remove("booking-box-error");
    modalShow.classList.add("booking-box-bounce");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalShow.classList.contains("booking-box")) {
      modalShow.classList.add("booking-box-hide");
      modalShow.classList.remove("booking-box-error");

      if (storageAdults) {
        adults.value = storageAdults;
      }
    }
  }
});



form.addEventListener("submit", function (evt) {
  if (!checkinDate.value || !checkoutDate.value || !adults.value) {
    evt.preventDefault();
    modalShow.classList.add("booking-box-error");
  } else {
    localStorage.setItem("adults", adults.value);
  }
});
