let mainNav = document.getElementById('uList');
let navBarToggle = document.querySelector("#checkboxLabel");
let checbox = document.querySelector("#checkbox");


// Checkbox unchecked when site width is over 767px
  var mq = window.matchMedia( "(max-width: 767px)" );
  if (mq.matches) {}
  else {
    checbox.checked = false
  }

// Give class active when you click on the Burger Menu
navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle('active');
  if (mainNav.classList = active) {

  }
});


// Dropdown JAMSTACK, give flex-style when pressed and remove when pressed again.
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("activeJob");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
      dropdownContent.style.background.color = "#0f1014";
      dropdownContent.style.color = "white";
    } else {
      dropdownContent.style.display = "flex";
    }
  });
}

let dropdwn = document.querySelector(".dropdown-container");