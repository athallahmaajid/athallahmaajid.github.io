let body = document.getElementsByTagName("body")[0];
let nav = document.getElementsByTagName("nav")[0];

function goTo(coordinate) {
  closeNav();
  body.scrollTo({top: coordinate, behavior: "smooth"});
}

body.addEventListener("scroll", function() {
  if (body.scrollTop == 0) {
    nav.className = "nav-show";
  } else {
    nav.className = "nav-stick";
  }
});

/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}