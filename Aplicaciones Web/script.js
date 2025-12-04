
const botonModo = document.getElementById("modoBtn");
if (botonModo) {
    botonModo.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}

function agregarProducto() {
    const input = document.getElementById("productoInput");
    const lista = document.getElementById("listaProductos");

    if (input.value.trim() === "") {
        alert("Escribe un producto");
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;
    lista.appendChild(li);

    input.value = "";
}

function toggleServicios() {
    const lista = document.getElementById("listaServicios");
    lista.style.display = lista.style.display === "none" ? "block" : "none";
}


function validarFormulario() {
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if (!correo.includes("@")) {
        alert("Correo no válido.");
        return false;
    }

    alert("Mensaje enviado correctamente ✔️");
    return true;
}
