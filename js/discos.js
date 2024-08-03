let set_id = 1;
class Disco {
    constructor(genero, artista, album, precio) {
        this.genero = genero
        this.artista = artista
        this.album = album
        this.precio = precio
        this.img = `../images/${artista}.png`;
    }
}

let catalogo = [
    new Disco('Grunge', 'Nirvana', 'In Utero', 165),
    new Disco('Grunge', 'Pearl Jam', 'Ten', 129),
    new Disco('Grunge', 'Soundgarden', 'Superunknown', 229),
    new Disco('Grunge', 'Alice in Chains', 'Dirt', 125),
    new Disco('Grunge', 'Stone Temple Pilots', 'Core', 140),
    new Disco('Grunge', 'Mudhoney', 'Superfuzz Bigmuff', 145),
    new Disco('Heavy Metal', 'Iron Maiden', 'The Number of the Beast', 160),
    new Disco('Heavy Metal', 'Metallica', '...And Justice For All', 120),
    new Disco('Heavy Metal', 'Megadeth', 'Countdown To Extinction', 380),
    new Disco('Heavy Metal', 'Rammstein', 'Sehnsucht', 170),
    new Disco('Heavy Metal', 'Judas Priest', 'British Steel (Ed. Especial)', 190),
    new Disco('Heavy Metal', 'Black Sabbath', 'Paranoid', 170),
    new Disco('Indie Rock', 'The Strokes', 'The New Abnormal', 165),
    new Disco('Indie Rock', 'Arctic Monkeys', 'AM', 159),
    new Disco('Indie Rock', 'Interpol', 'Turn On The Bright Lights', 150),
    new Disco('Indie Rock', 'The Killers', 'Hot Fuss', 155),
    new Disco('Indie Rock', 'Kings of Leon', 'Only By The Night', 130),
    new Disco('Indie Rock', 'Vampire Weekend', 'Modern Vampires of the City', 160),
    new Disco('Nu Metal', 'Deftones', 'Around The Fur', 160),
    new Disco('Nu Metal', 'System Of A Down', 'Toxicity', 129),
    new Disco('Nu Metal', 'Incubus', 'Make Yourself', 185),
    new Disco('Nu Metal', 'Linkin Park', 'Meteora', 150),
    new Disco('Nu Metal', 'Korn', 'Follow The Leader (2LP)', 175),
    new Disco('Nu Metal', 'Slipknot', 'Slipknot', 160),
    new Disco('Punk Rock', 'blink-182', 'Enema Of The State', 179),
    new Disco('Punk Rock', 'The Offspring', 'Americana', 150),
    new Disco('Punk Rock', 'Black Flag', 'Damaged', 150),
    new Disco('Punk Rock', 'NOFX', 'Punk In Drublic', 130),
    new Disco('Punk Rock', 'Bad Religion', 'Stranger Than Fiction', 140),
    new Disco('Punk Rock', 'Ramones', 'Rocket to Russia', 140),
    new Disco('Rock Alternativo', 'Radiohead', 'In Rainbows', 175),
    new Disco('Rock Alternativo', 'The Smashing Pumpkins', 'Mellon Collie and the Infinite Sadness (4LP)', 325),
    new Disco('Rock Alternativo', 'The Cure', 'Disintegration (2LP)', 175),
    new Disco('Rock Alternativo', 'Green Day', 'Dookie', 150),
    new Disco('Rock Alternativo', 'The Smiths', 'The Queen Is Dead', 145),
    new Disco('Rock Alternativo', 'The White Stripes', 'Elephant', 155),
    new Disco('Rock Progresivo', 'King Crimson', 'Red', 150),
    new Disco('Rock Progresivo', 'La máquina de hacer pájaros', 'Películas', 140),
    new Disco('Rock Progresivo', 'Tool', 'Ænima', 280),
    new Disco('Rock Progresivo', 'Invisible', 'El Jardín de los Presentes', 175),
    new Disco('Rock Progresivo', 'Dream Theater', 'Awake', 150),
    new Disco('Rock Progresivo', 'Genesis', 'Selling England by the Pound', 165),
    new Disco('Rock Psicodélico', 'Pink Floyd', 'The Dark Side of the Moon', 150),
    new Disco('Rock Psicodélico', 'King Gizzard & the Lizard Wizard', 'Oddments', 135),
    new Disco('Rock Psicodélico', 'The Velvet Underground', 'The Velvet Underground & Nico', 155),
    new Disco('Rock Psicodélico', 'The Doors', 'Waiting for the Sun', 130),
    new Disco('Rock Psicodélico', 'Tame Impala', 'Currents (2LP)', 185),
    new Disco('Rock Psicodélico', 'Jefferson Airplane', 'Surrealistic Pillow', 135),
    new Disco('Shoegaze', 'Slowdive', 'Souvlaki', 200),
    new Disco('Shoegaze', 'Cocteau Twins', 'Heaven or Las Vegas', 159),
    new Disco('Shoegaze', 'my bloody valentine', 'loveless', 140),
    new Disco('Shoegaze', 'Beach House', 'Bloom', 135),
    new Disco('Shoegaze', 'DIIV', 'Deceiver', 135),
    new Disco('Shoegaze', 'Ride', 'Nowhere', 140),
]