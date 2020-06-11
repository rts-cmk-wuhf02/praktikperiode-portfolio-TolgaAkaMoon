let mainNav = document.getElementById('uList');
let navBarToggle = document.getElementById('checkboxLabel');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
  console.log("hello")
});