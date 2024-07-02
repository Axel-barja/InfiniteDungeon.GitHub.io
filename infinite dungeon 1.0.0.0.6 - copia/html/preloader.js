// Simula la carga de la página
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const content = document.querySelector('.content');
    
    // Oculta el preloader después de 4 segundos
    setTimeout(function() {
        // Elimina completamente el preloader del DOM
        preloader.parentNode.removeChild(preloader);
        
        // Reactiva el contenido principal
        content.classList.remove('disabled');
        // Muestra el contenido
        document.body.style.overflow = 'auto'; // Permite que el contenido sea visible
    }, 4000); // Ocultar después de 4 segundos
});


