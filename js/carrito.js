document.addEventListener('DOMContentLoaded', () => {

    //actualizarCarrito(); // Cargar el carrito al inicio

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let template = document.querySelector('#carrito-template');
    let container = document.querySelector('#carrito-container');
    let totalElement = document.querySelector('#total');

    let total = 0;

    // Limpiar el contenedor antes de agregar elementos
    container.innerHTML = '';

    carrito.forEach((disco) => {
        let copia = template.content.cloneNode(true);

        copia.querySelector('h5').textContent = `${disco.artista} - ${disco.album}`;
        copia.querySelector('p').textContent = `S/. ${disco.precio}`;
        copia.querySelector('img').src = disco.img;

        // Crear y configurar el botón de eliminación
        let button = copia.querySelector('button');
        button.textContent = 'Eliminar';
        button.addEventListener('click', () => {
            eliminarCarrito(disco);
        });

        container.appendChild(copia);

        // Sumar el precio al total
        total += disco.precio;
    });

    totalElement.textContent = `S/. ${total}`;
});

function eliminarCarrito(disco) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let nombreAlbum = disco.album;
    let indice = carrito.findIndex(item => item.album === nombreAlbum);
    if (indice !== -1) {
        carrito.splice(indice, 1);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));

    location.reload();
}
