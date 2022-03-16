let body = document.getElementsByTagName("body")[0];
let nav = document.getElementsByTagName("nav")[0];

function goTo(coordinate) {
  body.scrollTo({top: coordinate, behavior: "smooth"});
}

body.addEventListener("scroll", function() {
  console.log(body.scrollTop);
  if (body.scrollTop == 0) {
    nav.className = "nav-show";
  } else {
    nav.className = "nav-stick";
  }
});