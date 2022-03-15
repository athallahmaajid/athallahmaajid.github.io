let myID = document.querySelector("nav");

window.onscroll = function(e) {
  console.log(e);
  if (window.pageYOffset > 0) {
    myID.className = "nav-hide"
  } else {
    myID.className = "nav-show"
  }
};