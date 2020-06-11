let mainNav = document.getElementById('uList');
let navBarToggle = document.querySelector("#checkboxLabel");
console.log(navBarToggle)

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle('active');
  console.log("hello")
});