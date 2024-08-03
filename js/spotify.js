// Api de Spotify

let nombreArtista1 = document.getElementById('nombreArtista1');
let nombreAlbum1 = document.getElementById('nombreAlbum1');
let fotoArtista = document.getElementById('fotoArtista');
let listaCanciones = document.getElementById('listaCanciones');
async function fetchAlbumData() {
    const url = 'https://spotify23.p.rapidapi.com/albums/?ids=7uUltiwqvVn8Uy23Hdf1kE';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'd3c2d27a5fmsh2f1947c37683d70p15e5bejsn49060f98c5c4',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
      }
    };
  
    try {
        const response = await fetch(url, options);
        const result = await response.json();
    
        if (result.albums && result.albums.length > 0) {
          const album = result.albums[0];
    
          // Actualiza los elementos del DOM con los datos del álbum
          nombreArtista1.textContent = album.artists[0].name;
          nombreAlbum1.textContent = album.name;
          fotoArtista.src = album.images[0].url;
    
          let canciones = album.tracks.items;

          let todasLasCanciones = '';
          canciones.forEach((cancion, index)=> {
            let nombreCancion = cancion.name;
            let cancionUrl = cancion.preview_url;
            todasLasCanciones += `
            <div class="col-12 col-md-4 text-center">
                <p>${index + 1}. ${nombreCancion}</p>
                <audio controls>
                    <source src="${cancionUrl}" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </div>`;
            console.log(nombreCancion);
            console.log(cancion.preview_url);
          });
          listaCanciones.innerHTML = todasLasCanciones;
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    // Llama a la función asíncrona
    fetchAlbumData();
