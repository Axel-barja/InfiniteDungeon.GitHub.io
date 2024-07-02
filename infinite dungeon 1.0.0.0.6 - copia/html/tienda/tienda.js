let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(element => {
    element.addEventListener('click', () => {
    
        element.classList.toggle('arrow');
        let height = 0;
        let menu = element.nextElementSibling;
        console.log()
        if(menu.clientHeight == "0"){
            height = menu.scrollHeight;
        }

        menu.style.height = height+"px";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const scrollContainer = document.querySelector('.destacados');

    let isDown = false;
    let startX;
    let scrollLeft;

    scrollContainer.addEventListener('mousedown', function(e) {
        isDown = true;
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });

    scrollContainer.addEventListener('mouseleave', function() {
        isDown = false;
    });

    scrollContainer.addEventListener('mouseup', function() {
        isDown = false;
    });

    scrollContainer.addEventListener('mousemove', function(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 1; // Ajusta la sensibilidad del desplazamiento
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
});