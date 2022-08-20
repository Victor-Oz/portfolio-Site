/** @format */
var typed = new Typed(".mov",{
  strings: [,  "Victor Ozurumba ,","a Frontend Web Developer ,","a Designer ,","a Gamer."] ,
  typeSpeed: 69,
  backSpeed: 10,
  loop: true

  })

let cursur = document.getElementById("cursur");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursur.style.left = x + "px";
  cursur.style.top = y + "px";
});

document.addEventListener("mousemove", move);
function move(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 150;
    const y = (window.innerHeight - e.pageY * speed) / 150;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

