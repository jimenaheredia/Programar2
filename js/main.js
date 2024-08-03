// Acá comenzaría 

let container = document.querySelector('[data-genre]');
let genre = container.getAttribute('data-genre');

// Filtrar los discos por el género correspondiente
let catalogoFiltrado = catalogo.filter(Disco => Disco.genero === genre);

let template = document.querySelector('#card-template')
//let contenido = template.content
//let clon = contenido.cloneNode(true)

let container_cards = document.querySelector('#container')

// Función para agregar al carrito
function agregarAlCarrito(disco) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(disco);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "El disco ha sido agregado al carrito",
        showConfirmButton: false,
        timer: 1500,
        customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        content: 'custom-swal-content',
        }
    });
}

function eliminarCarrito(disco) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let nombreAlbum = disco.album;
    let indice = carrito.findIndex(carrito => carrito.album === nombreAlbum);
    if (indice !== -1) {
        carrito.splice(indice, 1);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
    location.reload();
}



// Por cada album quiero generar una card
catalogoFiltrado.forEach((Disco) => {
    // Un nodo que esta en el aire
    let copia = document.querySelector('template').content.cloneNode(true)
    
    copia.querySelector('h5').textContent = Disco.artista + " - " + Disco.album
    copia.querySelector('p').textContent += Disco.precio
    copia.querySelector('img').src = Disco.img

    let button = copia.querySelector('button')
    button.classList.add(Disco.artista.replace(/ /g, '_'))

    button.addEventListener('click', () => {
        agregarAlCarrito(Disco);
    });

    // Bajar a donde? -> al contenedor
    container_cards.append(copia)
})


