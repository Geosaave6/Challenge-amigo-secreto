// Array para almacenar los nombres de amigos
let amigos = [];
let AmigosDisponibles = []; 

// Capturar el input para detectar la tecla Enter
document.getElementById("amigo").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});


// Función para agregar un amigo
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim(); // Eliminar espacios extra

    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombre);
AmigosDisponibles.push(nombre)

    // Actualizar la lista
    actualizarLista();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Actualizar la lista de amigos
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo
function sortearAmigo() {
    // Validar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Agrega al menos uno antes de sortear.");
        return;
    }

    if (AmigosDisponibles.length === 0) {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `<li> ¡Todos los amigos han sido sorteados! </li>`;
        return;
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * AmigosDisponibles.length);

    // Obtener el nombre del amigo sorteado
    let amigoSorteado = AmigosDisponibles.splice(indiceAleatorio, 1)[0];

    // Mostrar el resultado en el HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> ¡El amigo sorteado es: <strong>${amigoSorteado}</strong>! </li>`;
}