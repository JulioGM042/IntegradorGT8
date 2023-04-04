document.addEventListener("DOMContentLoaded", function(event) {
  const carousel = document.getElementById('Reel');
  const images = carousel.querySelectorAll('img');
  let index = 0;

  function changeImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    if (index < images.length) {
      images[index].classList.add('active');
    }
  }

  setInterval(changeImage, 3000); // cambia la imagen cada 3 segundos
});

function updateLabel() {
  var precioInput = document.getElementById("precio");
  var precioOutput = document.getElementById("precio-output");
  var minPrecioOutput = document.getElementById("min-precio-output");
  var maxPrecioOutput = document.getElementById("max-precio-output");

  precioOutput.value = precioInput.value;
  minPrecioOutput.textContent = precioInput.min;
  maxPrecioOutput.textContent = precioInput.max;
}


