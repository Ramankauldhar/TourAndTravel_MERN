
function animation() {
  var animations = document.querySelectorAll(".animation");

  for (var i = 0; i < animations.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = animations[i].getBoundingClientRect().top;
    var elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      animations[i].classList.add("active2");
    } else {
      animations[i].classList.remove("active2");
    }
  }
}

window.addEventListener("scroll", animation);