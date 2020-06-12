let mainNav = document.getElementById('uList');
let navBarToggle = document.querySelector("#checkboxLabel");
let checbox = document.querySelector("#checkbox");

  var mq = window.matchMedia( "(max-width: 767px)" );
  if (mq.matches) {
    
  }
  else {
    checbox.checked = false
  }

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle('active');
});