let mainNav = document.getElementById('uList');
let navBarToggle = document.querySelector("#checkboxLabel");
let checbox = document.querySelector("#checkbox");

mainNav.children[0].addEventListener("click", function() {
  document.querySelector('.dropdown-btn').scrollIntoView({ 
    behavior: 'smooth'});
})
mainNav.children[1].addEventListener("click", function() {
  document.querySelector('.Frame__button').scrollIntoView({ 
    behavior: 'smooth'});
})
mainNav.children[2].addEventListener("click", function() {
  document.querySelector('.Work__button').scrollIntoView({ 
    behavior: 'smooth'});
})
mainNav.children[3].addEventListener("click", function() {
  document.querySelector('.About__button').scrollIntoView({ 
    behavior: 'smooth'});
})

// Checkbox unchecked when site width is over 767px
setInterval(() => {
  var mq = window.matchMedia( "(max-width: 767px)" );
  if (mq.matches) {}
  else {
    checbox.checked = false
  }
}, 1000);

navBarToggle.addEventListener("click", function() {
  navBarToggle.style.transform = "scale(1.2)";
  setTimeout(function(){
    navBarToggle.style.transform = "scale(1)";
  }, 100)
});

// Give class active when you click on the Burger Menu
navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle('active');
  if (mainNav.classList == "") {
    mainNav.id = "navLeftToRight";
    setTimeout(function(){
      mainNav.id = "uList";
    }, 500);
  }
  else {
    mainNav.id = "uList";
  }
});


// Dropdown JAMSTACK, give flex-style when pressed and remove when pressed again.
let dropdown = document.getElementsByClassName("dropdown-btn");
let i;
let jamstackDesc = document.querySelector(".main__jamDesc");
let jamstackDrop = document.querySelector(".dropdown-container");
let jamstackTitle = document.querySelector(".jamstack__heading1");
let JamstackText = {
JavaScript: 'Jeg har arbejdet med JavaScript i over 2 år nu, og jeg har lært en masse omkring DOM Manupulation.',
API: 'Spotify har et API som jeg har arbejdet med, man skal dov have premium som er noget lort.',
HTML: 'Jeg har arbejdet med HTML i et stykek tid, blah blah blah, jeg er super god til at kode og så videre, html html blah flere år endu'
}

jamstackDrop.addEventListener("click", function(e) {
  if (e.target.localName == "a") {
    jamstackTitle.innerHTML = e.target.innerHTML;
    let evoTarget = e.target.innerHTML;
    let pathJs = `JamstackText.${e.target.innerHTML}`;
    jamstackDesc.innerHTML = eval(pathJs);
  }
  else {

  }
});

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
