// Arreglo de objetos con información de artistas, deportistas, cantantes o personajes favoritos
const Personasfavoritas= [
    { Nombre: "Cristiano Ronaldo", ocupación: "Deportista"},
    { Nombre: "Lionel Messi", ocupación: "Deportista"},
    { Nombre: "Michael Jackson", ocupación: "Cantante"},
    { Nombre: "Un verano sin ti", cantante: "Bad Bunny"},
    { Nombre: "Romeo Santos", ocupación: "Cantante"},
    { Nombre: "Tsubasa Ozora", ocupación: "Futbolista"},
    { Nombre: "Fútbol", ocupación: "Jugarlo"},
    { Nombre: "Dragon ball", creador: "Akira Toriyama"},
    { Nombre: "Ben 10 Alien Force", ocupación: "Serie de televisión"},
    { Nombre: "Hamster", ocupación: "Mascota"}
];

// Función para mostrar la información en pantalla
function displayFavoritePeople() {
    const favoritesList = document.getElementById("favorites-list");

    favoritePeople.forEach(person => {
        const personInfo = document.createElement("div");
        personInfo.classList.add("person-info");
        personInfo.innerHTML = `
            <h2>${person.name}</h2>
            <p><strong>Occupation:</strong> ${person.occupation}</p>
            <p><strong>Famous For:</strong> ${person.famousFor || person.sport || person.genre || person.field}</p>
        `;
        favoritesList.appendChild(personInfo);
    });
}

// Llamar a la función para mostrar la información en pantalla al cargar la página
displayFavoritePeople();

