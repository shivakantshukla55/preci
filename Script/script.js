addEventListener("load", function () {
  setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
  window.scrollTo(0, 1);
}

let header = document.querySelector('#header');

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 650 || document.documentElement.scrollTop >= 650 ) {
        header.classList.add("nav-colored");
        header.classList.remove("nav-transparent");
    } 
    else {
        header.classList.add("nav-transparent");
        header.classList.remove("nav-colored");
    }
};