
alert('¡Bienvenido a CherrySide, tu dealer favorito de vinilos!\nSumérgete en la electrizante atmósfera de nuestra tienda especializada en vinilos de rock y sus subgéneros.');

function saludar() {
    let nombre = prompt('Yo soy CherryBot, tu guía en este viaje sonoro.\n¿Cómo te llamas, amante de la música?');
    if (nombre) {
        alert(`${nombre}, un placer conocerte.\nExplora nuestro catálogo online y encuentra el disco que te hará vibrar.`);
    } else {
        alert('No ingresaste un nombre. Por favor, intenta de nuevo.');
    }
}
saludar ();

//Aquí le pedimos que escoja un género
function opcionGenero() {
    let generos = '1. Heavy Metal\n2. Nu Metal\n3. Rock Progresivo\n4. Rock Psicodélico\n5. Shoegaze';
    let generoElegido = parseInt(prompt(`¿Qué género musical te apasiona hoy?\nElige un número:\n${generos}`));

    if(isNaN(generoElegido)|| generoElegido < 1 || generoElegido > 5) {
        alert('Ingrese un número válido, por favor');
    } else {
        let generoNombre;
        switch (generoElegido) {
            case 1:
                generoNombre = 'Heavy Metal';
                break;
            case 2:
                generoNombre = 'Nu Metal';
                break;
            case 3:
                generoNombre = 'Rock Progresivo';
                break;
            case 4:
                generoNombre = 'Rock Psicodélico';
                break;
            case 5:
                generoNombre = 'Shoegaze';
                break;
            default: 
                alert('Opción no válida. Ingrese un número correcto.');
                return null;
        }
        return generoNombre;
    }
}

// Acá definimos el catálogo y lo mostramos
function mostrarCatalogo (generoNombre) {
    let catalogoElegido;
    switch (generoNombre) {
        case 'Heavy Metal':
            catalogoElegido = '1- Iron Maiden - The Number of the Beast - S/. 160.00\n2- Metallica - ...And Justice For All - S/. 120.00\n3- Megadeth - Countdown To Extinction - S/. 380.00\n4- Rammstein - Sehnsucht - S/. 170.00\n5- Judas Priest - British Steel - S/. 190.00';
            break;
        case 'Nu Metal':
            catalogoElegido = '1- Deftones - Around The Fur - S/. 160.00\n2- System Of A Down - Toxicity - S/. 129.00\n3- Incubus - Make Yourself - S/. 185.00\n4- Linkin Park - Meteora - S/. 150.00\n5- Korn - Follow The Leader - S/. 175.00';
            break;
        case 'Rock Progresivo':
            catalogoElegido = '1- King Crimson - Red - S/. 150.00\n2- La máquina de hacer pájaros - Peliculas - S/. 140.00\n3- Invisible - El Jardín de los Presentes - S/. 175.00\n4- Tool - Ænima - S/. 280.00\n5- Dream Theater - Awake - S/. 150.00';
            break;
        case 'Rock Psicodélico':
            catalogoElegido = '1- Pink Floyd - The Dark Side of the Moon - S/. 150.00\n2- King Gizzard & the Lizard Wizard - Oddments - S/. 135.00\n3- The Doors - Waiting for the Sun - S/. 130.00\n4- The Velvet Underground - The Velvet Underground & Nico - S/. 155.00\n5- Tame Impala - Currents - S/. 185.00';
            break;
        case 'Shoegaze':
            catalogoElegido = '1- Slowdive - Souvlaki - S/. 200.00\n2- Cocteau Twins - Heaven or Las Vegas - S/. 159.00\n3- my bloody valentine - loveless- S/. 140.00\n4- Beach House - Bloom- S/. 135.00\n5- DIIV - Deceiver- S/. 135.00';
            break;
        default: 
            alert("Opción no válida. Ingrese un número correcto.");
            return null;
    }

    let artista = parseInt(prompt(`Tenemos estos vinilos de ${generoNombre} en stock, cuéntanos ¿qué disco te gustaría llevar a casa?:\n${catalogoElegido}\nEscoge un número.`));

    if (isNaN(artista) || artista < 1 || artista > 5) {
        alert('Opción no válida, por favor intenta de nuevo.');
    }

    return {generoNombre, artista};
}

// Aquí definimos el precio que se mostrará
function obtenerDiscoYPrecio (generoNombre, artista) {
    let discoElegido;
    let precioDisco;

    if (generoNombre === 'Heavy Metal') {
        if (artista === 1) {discoElegido = 'Iron Maiden - The Number of the Beast'; precioDisco = 160;}
        else if (artista === 2) {discoElegido = 'Iron Maiden - The Number of the Beast'; precioDisco = 160;}
        else if (artista === 3) {discoElegido = 'Iron Maiden - The Number of the Beast'; precioDisco = 160;}
        else if (artista === 4) {discoElegido = 'Iron Maiden - The Number of the Beast'; precioDisco = 160;}
        else if (artista === 5) {discoElegido = 'Iron Maiden - The Number of the Beast'; precioDisco = 160;}
    }
    if (generoNombre === 'Nu Metal') {
        if (artista === 1) {discoElegido = 'Deftones - Around The Fur'; precioDisco = 160;}
        else if (artista === 2) {discoElegido = 'System Of A Down - Toxicity'; precioDisco = 129;}
        else if (artista === 3) {discoElegido = 'Incubus - Make Yourself'; precioDisco = 185;}
        else if (artista === 4) {discoElegido = 'Linkin Park - Meteora'; precioDisco = 150;}
        else if (artista === 5) {discoElegido = 'Korn - Follow The Leader'; precioDisco = 175;}
    }
    if (generoNombre === 'Rock Progresivo') {
        if (artista === 1) {discoElegido = 'King Crimson - Red'; precioDisco = 150;}
        else if (artista === 2) {discoElegido = 'La máquina de hacer pájaros - Peliculas'; precioDisco = 140;}
        else if (artista === 3) {discoElegido = 'Invisible - El Jardín de los Presentes'; precioDisco = 175;}
        else if (artista === 4) {discoElegido = 'Tool - Ænima'; precioDisco = 280;}
        else if (artista === 5) {discoElegido = 'Dream Theater - Awake'; precioDisco = 150;}
    }
    if (generoNombre === 'Rock Psicodélico') {
        if (artista === 1) {discoElegido = 'Pink Floyd - The Dark Side of the Moon'; precioDisco = 150;}
        else if (artista === 2) {discoElegido = 'King Gizzard & the Lizard Wizard - Oddments'; precioDisco = 135;}
        else if (artista === 3) {discoElegido = 'The Doors - Waiting for the Sun'; precioDisco = 130;}
        else if (artista === 4) {discoElegido = 'The Velvet Underground - The Velvet Underground & Nico'; precioDisco = 155;}
        else if (artista === 5) {discoElegido = 'Tame Impala - Currents'; precioDisco = 185;}
    }
    if (generoNombre === 'Shoegaze') {
        if (artista === 1) {discoElegido = 'Slowdive - Souvlaki'; precioDisco = 200;}
        else if (artista === 2) {discoElegido = 'Cocteau Twins - Heaven or Las Vegas'; precioDisco = 159;}
        else if (artista === 3) {discoElegido = 'my bloody valentine - loveless'; precioDisco = 140;}
        else if (artista === 4) {discoElegido = 'Beach House - Bloom'; precioDisco = 135;}
        else if (artista === 5) {discoElegido = 'DIIV - Deceiver'; precioDisco = 135;}
    }
    return {disco: discoElegido, precio: precioDisco};
}

// Acá mostramos el precio total más el envío

function totalPrecio (disco, precio) {
    let precioEnvio = 15;
    let precioTotal = precio + precioEnvio;

    alert (`Has elegido ${disco}.\nEl precio es de S/. ${precio}.\nEl costo de envío a todo el Perú es de S/. ${precioEnvio}.\nEl total de tu compra es S/. ${precioTotal}.\n¡Gracias por comprar en CherrySide!`)
}

function opcionArtista() {
    let generoNombre = opcionGenero();
    if (!generoNombre) return;

    let seleccion = mostrarCatalogo(generoNombre);
    if (!seleccion) return;

    let {disco, precio} = obtenerDiscoYPrecio(generoNombre, seleccion.artista);
    totalPrecio(disco, precio);
}

opcionArtista();