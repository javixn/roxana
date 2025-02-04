//Proceso
const SI= document.getElementById('botonsi');
const NO= document.getElementById('botonno');

//funcion del boton si

botonsi.addEventListener ('click' , () =>{

window.location.href = "https://gifft.me/es/o/3d/4dgzhy8keun32fcywaoe3xpb";


});

//funcion boton no

botonno.addEventListener('click', () => {
   
    const maxX = window.innerWidth - botonno.offsetWidth; 
    const maxY = window.innerHeight - botonno.offsetHeight;

    // Genera posiciones aleatorias dentro de los límites de la pantalla
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Cambia la posición del botón "No"
    botonno.style.position = 'absolute';
    botonno.style.left = `${randomX}px`;
    botonno.style.top = `${randomY}px`;
});

