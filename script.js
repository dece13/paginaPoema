// Lista de palabras clave para el generador de poemas
const palabrasClave = [
    "amor", "felicidad", "corazón", "risa", "abrazo", "mirada",
    "sonrisa", "complicidad", "alegría", "ternura", "encanto",
    "nombreDeTuNovia", "momentosJuntos", "aventuras", "sonrisas",
    "susurro", "cariño", "sueños", "magia", "encanto",
    "chiste", "risueño", "divertido", "broma", "travesura"
];

// Lista de estructuras de poema tiernas
const estructurasPoemaTierno = [
    "Tu {nombreDeTuNovia}, mi fuente de {alegría} constante.",
    "Con tu {sonrisa} iluminas mi día, instantáneamente.",
    "Juntos en nuestras {aventuras}, viviendo la {magia} de nuestro amor.",
    "En tu {complicidad} y {cariño} encuentro mi {felicidad}, sin temor."
];

// Lista de estructuras de poemas graciosos
const estructurasPoemaGracioso = [
    "Eres mi {chiste} favorito, siempre {risueño} y {divertido}.",
    "Tu {broma} es como una {travesura}, y yo soy tu cómplice en esta locura.",
    "Nuestra risa es la banda sonora de nuestros momentos Juntos, ¡qué maravillosa aventura!",
    "En el {corazón} de nuestras {sonrisas}, encontramos la magia del {amor} y el encanto."
];

// Función para generar un poema tierno o gracioso
function generarPoema() {
    // Escoger entre generar un poema tierno o gracioso al azar
    const esTierno = Math.random() < 0.5;

    // Seleccionar una estructura de poema aleatoria según la elección
    const estructura = esTierno ? estructurasPoemaTierno[Math.floor(Math.random() * estructurasPoemaTierno.length)] :
                                   estructurasPoemaGracioso[Math.floor(Math.random() * estructurasPoemaGracioso.length)];

    // Seleccionar palabras aleatorias de la lista de palabras clave
    const palabra1 = palabrasClave[Math.floor(Math.random() * palabrasClave.length)];
    const palabra2 = palabrasClave[Math.floor(Math.random() * palabrasClave.length)];
    const palabra3 = palabrasClave[Math.floor(Math.random() * palabrasClave.length)];

    // Reemplazar las variables en la estructura
    const poema = estructura
        .replace("{nombreDeTuNovia}", "Aura")
        .replace("{alegría}", "alegría")
        .replace("{sonrisa}", "sonrisa")
        .replace("{aventuras}", "aventuras")
        .replace("{magia}", "magia")
        .replace("{complicidad}", "complicidad")
        .replace("{cariño}", "cariño")
        .replace("{felicidad}", "felicidad")
        .replace("{chiste}", "chiste")
        .replace("{risueño}", "risueño")
        .replace("{divertido}", "divertido")
        .replace("{broma}", "broma")
        .replace("{travesura}", "travesura")
        .replace("{corazón}", "corazón")
        .replace("{amor}", "amor");

    // Mostrar el poema en la página
    const poemOutput = document.getElementById("poem-output");
    poemOutput.textContent = poema;
}

// Agregar un evento al botón de generación
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generarPoema);
