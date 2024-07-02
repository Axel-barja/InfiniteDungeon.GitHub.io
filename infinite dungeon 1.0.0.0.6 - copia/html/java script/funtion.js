
const slider = document.getElementById('slider');
const images = slider.querySelectorAll('img');
let currentIndex = 0;// Índice de la imagen actual

function nextSlide(){
    images [currentIndex].style.display='none' /*desactivamos la primera imagen*/

    currentIndex (currentIndex + 1) % images.length /*obtenemos el indice de la siguiente imagen */

   images[currentIndex] .style.display='block' /*mostramos la siguiente pagina */

   setInterval(nextSlide,3000);// Cambiar a la siguiente imagen cada cierto tiempo (por ejemplo, cada 3 segundos)




}

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; // Ajusta la velocidad de desplazamiento
    slider.scrollLeft = scrollLeft - walk;
});

function smoothScroll(target) {
    let currentScroll = slider.scrollLeft;
    const scrollStep = Math.PI / (500 / 15); // 15 es la velocidad de desplazamiento

    function scroll() {
        currentScroll = currentScroll + (target - currentScroll) * 0.05;
        if (Math.abs(currentScroll - target) < 0.5) {
            slider.scrollLeft = target;
            return;
        }
        slider.scrollLeft = currentScroll;
        requestAnimationFrame(scroll);
    }
    scroll();
}

