document.addEventListener("DOMContentLoaded", function () {

```
const formulario = document.getElementById("formularioTarea");

const contenedor = document.getElementById("contenedorTareas");

const mensaje = document.getElementById("mensaje");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

// GUARDAR TAREAS

function guardarTareas() {

    localStorage.setItem("tareas", JSON.stringify(tareas));

}

// MOSTRAR TAREAS

function mostrarTareas() {

    contenedor.replaceChildren();

    if (tareas.length === 0) {

        const aviso = document.createElement("p");

        aviso.textContent = "Todavía no tienes tareas registradas.";

        contenedor.appendChild(aviso);

        return;

    }

    tareas.forEach(function (tarea, indice) {

        const tarjeta = document.createElement("article");

        tarjeta.className = "tarea";

        if (tarea.completada) {
            tarjeta.classList.add("completada");
        }

        const titulo = document.createElement("h3");

        titulo.textContent = tarea.nombre;

        const descripcion = document.createElement("p");

        descripcion.textContent = "Descripción: " + tarea.descripcion;

        const fecha = document.createElement("p");

        fecha.textContent = "Fecha de entrega: " + tarea.fecha;

        const prioridad = document.createElement("p");

        prioridad.textContent = "Prioridad: " + tarea.prioridad;

        prioridad.classList.add(
            "prioridad-" + tarea.prioridad.toLowerCase()
        );

        const estado = document.createElement("p");

        estado.textContent = tarea.completada
            ? "Estado: Completada"
            : "Estado: Pendiente";

        const botones = document.createElement("div");

        botones.className = "botones-tarea";

        const completar = document.createElement("button");

        completar.type = "button";

        completar.className = "boton-completar";

        completar.textContent = tarea.completada
            ? "Marcar como pendiente"
            : "Completar tarea";

        completar.addEventListener("click", function () {

            tareas[indice].completada = !tareas[indice].completada;

            guardarTareas();

            mostrarTareas();

        });

        const eliminar = document.createElement("button");

        eliminar.type = "button";

        eliminar.className = "boton-eliminar";

        eliminar.textContent = "Eliminar tarea";

        eliminar.addEventListener("click", function () {

            if (confirm("¿Deseas eliminar esta tarea?")) {

                tareas.splice(indice, 1);

                guardarTareas();

                mostrarTareas();

            }

        });

        botones.appendChild(completar);

        botones.appendChild(eliminar);

        tarjeta.appendChild(titulo);

        tarjeta.appendChild(descripcion);

        tarjeta.appendChild(fecha);

        tarjeta.appendChild(prioridad);

        tarjeta.appendChild(estado);

        tarjeta.appendChild(botones);

        contenedor.appendChild(tarjeta);

    });

}

// REGISTRAR TAREAS

formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombreTarea").value.trim();

    const descripcion = document.getElementById("descripcion").value.trim();

    const fecha = document.getElementById("fecha").value;

    const prioridad = document.getElementById("prioridad").value;

    if (!nombre || !descripcion || !fecha || !prioridad) {

        mensaje.textContent = "Completa todos los campos.";

        return;

    }

    const nuevaTarea = {

        nombre: nombre,

        descripcion: descripcion,

        fecha: fecha,

        prioridad: prioridad,

        completada: false

    };

    tareas.push(nuevaTarea);

    guardarTareas();

    mostrarTareas();

    formulario.reset();

    mensaje.textContent = "¡Tarea registrada correctamente!";

});

// MOSTRAR LAS TAREAS AL CARGAR LA PÁGINA

mostrarTareas();
```

});
