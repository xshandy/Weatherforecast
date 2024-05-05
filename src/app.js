function showCityInForm(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let currentCityElement = document.querySelector("#current-city");
  currentCityElement.innerHTML = searchInput.value;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", showCityInForm);
