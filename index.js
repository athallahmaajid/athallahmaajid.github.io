let body = document.getElementsByTagName("body")[0];
let nav = document.getElementsByTagName("nav")[0];

function goTo(id) {
  closeNav();
  document.getElementById(id).scrollIntoView({
    behavior: 'smooth'
  });}
/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}