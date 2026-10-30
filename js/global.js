let mybutton = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
   if (document.documentElement.scrollTop > 20) {
       mybutton.style.display = "block";
   } else {
       mybutton.style.display = "none";
   }
}

function topFunction() {
   document.documentElement.scrollTop = 0;
}