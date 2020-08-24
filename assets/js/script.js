let mainNav = document.getElementById('uList');
let navBarToggle = document.querySelector("#checkboxLabel");
let checbox = document.querySelector("#checkbox");

if('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('../../sw.js').then(function(registration) {
      console.log('ServiceWorker registration was successful with scope: ', registration.scope);
    }, function (err) {
      console.log('ServiceWorker registration failed: ', err);
    })
  })
}


window.addEventListener('scroll', function(e){
  if (window.scrollY >= 100) {
    document.querySelector("nav").style.backgroundColor = "#14161b";
  }
  else {
    document.querySelector("nav").style.backgroundColor = "#0f1014";
  }
});

mainNav.children[0].addEventListener("click", function() {
  document.querySelector('.jamstack__div').scrollIntoView({ 
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
IMUSICPLAYER: `IMusicPlayer er et projekt jeg havde en uge til, jeg skulle lave alt fra bunden. Jeg skulle bruge Spotify's API, som er et meget godt api, men kræver premium abonoment.`,
JAVASCRIPT: `Jeg har arbejdet med JavaScript i over 2 år nu, og jeg har lært en masse omkring DOM Manupulation. 
Her er lidt af JavaScript koden til min Player
<code class="trash__code">

document.addEventListener("DOMContentLoaded", () => {<br>
  <br>
    let Base64 = "basic ZjFlYmQ5YmRjMTVlNDhlMGIxYmNmZjhiNmY0NmNjZjA6ZTFmZjNkNDhjMDRiNGIzNGFjYzZkMmYyMGQxYmNjMDY=";<br>
    let scope = "user-read-email user-read-private user-read-playback-state user-modify-playback-state user-read-currently-playing streaming"<br>
  <br>
    fetch('https://accounts.spotify.com/api/token', {<br>
        method: 'post',<br>
        headers: {<br>
            'Authorization': Base64,<br>
            'Content-Type': 'application/x-www-form-urlencoded'<br>
        }<br>
    })<br>
    .then(res => res.json())<br>
    .then(json => {<br>
      <br>
        console.log(json)<br>
        <br>
        let accessToken = "Bearer "+ json.access_token;<br>
        <br>
        fetch('https://api.spotify.com/v1/me/player', {<br>
            method: 'get',<br>
            headers: {<br>
                'Authorization': accessToken,<br>
            }<br>
        })<br>
        .then(res => res.json())<br>
        .then(tracks => { <br>
          <br>
            console.log(tracks)<br>
            <br>
            let accessToken = "Bearer "+ json.access_token;<br>
            <br>
            fetch('https://api.spotify.com/v1/me/player/play', {<br>
                method: 'put',<br>
                body: {<br>
                    "uris": [<br>
                        "spotify:track:4iV5W9uYEdYUVa79Axb7Rh",<br>
                        "spotify:track:1301WleyT98MSxVHPZCA6M"<br>
                    ],<br>
                    "offset": {"position": 5},<br>
                    "position_ms": 0<br>
                },<br>
                headers: {<br>
                    'Authorization': accessToken,<br>
                }<br>
            })<br>
            .then(res => res.json())<br>
            .then(tracks => {<br>
                console.log(tracks)<br>
            });<br>
        });<br>
    });<br>
  });<br>

</code>
`,
API: `Spotify har et API som jeg har arbejdet lidt med, nedenunder er javascript koden til hvordan jeg for fat i spotify's api.

<code class="trash__code">

  fetch('https://accounts.spotify.com/api/token', {<br>
      method: 'post',<br>
      headers: {<br>
          'Authorization': Base64,<br>
          'Content-Type': 'application/x-www-form-urlencoded'<br>
      }<br>
  })<br>
  .then(res => res.json())<br>
  .then(json => {<br>
    <br>
      console.log(json)<br>

</code>`,
HTML: `
HTML var ikke sår svært, jeg følgte bare en meget klassisk structur:
<br>
Div <br>
A<br>
Img<br>
H2<br>
H5<br>
Img<br>
/a<br>
/div
`
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
