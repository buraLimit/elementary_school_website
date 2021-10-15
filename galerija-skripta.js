const photos = [
    "deca/1.jpg",
    "deca/2.jpg",
    "deca/3.jpg",
    "deca/4.jpg",
    "deca/5.jpg",
    "deca/6.jpg",
	"deca/7.jpg",
    "deca/8.jpg",
    "deca/9.jpg",
    "deca/10.jpg",
    "deca/11.jpg",
    "deca/12.jpg",
	"deca/13.jpg",
    "deca/14.jpg",
    "deca/15.jpg",
    "deca/16.jpg",
    "deca/17.jpg",
    "deca/18.jpg",
	"deca/19.jpg",
    "deca/20.jpg",
    "deca/21.jpg",
]

let imageLeft;
let imageCenter;
let imageRight;

let currentID = 0;

window.onload = function () {

    imageLeft = document.getElementById('image-left');
    imageCenter = document.getElementById('image-center');
    imageRight = document.getElementById('image-right');

    imageCenter.src = photos[0];
    imageLeft.src = photos[photos.length - 1];
    imageRight.src = photos[1];
}

function forwardImage() {
    currentID++;

    if (currentID > photos.length - 1) {
        currentID = 0;
    }

    assignImages();
}

function backwardImage() {
    currentID--;

    if (currentID < 0) {
        currentID = photos.length - 1;
    }

    assignImages();
}

function assignImages() {

    let previousID = currentID - 1;
    if (previousID < 0) {
        previousID = photos.length - 1;
    }

    let nextID = currentID + 1;
    if (nextID > photos.length - 1) {
        nextID = 0;
    }

    imageLeft.src = photos[previousID];
    imageCenter.src = photos[currentID];
    imageRight.src = photos[nextID];

    restartAnimations();
}

function restartAnimations() {
    const element1 = imageLeft.parentElement;
    element1.classList.remove("gallery-entry-animation");
    void element1.offsetWidth;
    element1.classList.add("gallery-entry-animation");

    const element2 = imageCenter.parentElement;
    element2.classList.remove("gallery-entry-animation");
    void element2.offsetWidth;
    element2.classList.add("gallery-entry-animation");

    const element3 = imageRight.parentElement;
    element3.classList.remove("gallery-entry-animation");
    void element3.offsetWidth;
    element3.classList.add("gallery-entry-animation");
}



























































































/*<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Dropdown</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}*/



