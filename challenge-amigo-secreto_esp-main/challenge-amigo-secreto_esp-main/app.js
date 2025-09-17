 // Array donde se guardarán los nombres de los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // quitamos espacios al inicio y final
    const lista = document.getElementById("listaAmigos");

    // Validaciones
    if (nombre === "") {
        alert("Por favor escribe un nombre.");
        return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert("El nombre solo puede contener letras y espacios.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    // Agregar al array
    amigos.push(nombre);

    // Mostrar en la lista
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);

    // Limpiar input
    input.value = "";
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados previos

    if (amigos.length < 2) {
        alert("Debes ingresar al menos 2 amigos para hacer el sorteo.");
        return;
    }

    // Obtener un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const li = document.createElement("li");
    li.textContent = ` Tu amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}
