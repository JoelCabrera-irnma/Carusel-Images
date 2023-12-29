// carousel.js
// argumento "containerId": sirve para poder seleccionar el contenedor de las img y poder desplazarse dentro de ella
// argumento "imagePaths": sirve para obtener la longitud de la cantidad de imagenes
// argumento "indicators": sirve para poder seleccionar contenedor donde se crearan los circulitos selectores
export function createCarousel(containerId, imagePaths, indicators) {
  let currentIndex = 0;
  
  const totalImages = document.querySelectorAll(imagePaths).length
  const imageContainer = document.getElementById(containerId);
  const indicatorsContainer = document.getElementById(indicators);

  // Crear indicadores visual "circulitos"
  for (let i = 0; i < totalImages; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      indicator.addEventListener('click', () => goToImage(i));
      indicatorsContainer.appendChild(indicator);
    }

  function updateCarousel() {
    imageContainer.style.transform = `translateX(${-currentIndex * 200}px)`;

    const indicators = indicatorsContainer.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    updateCarousel();
  }

  function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateCarousel();
  }

  function goToImage(index) {
    currentIndex = index;
    updateCarousel();
  }

  // Inicializar el carrusel
  updateCarousel();
  
  return { nextImage, prevImage };
}
