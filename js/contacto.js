document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formularioContacto");

    const resultado = document.getElementById("resultadoContacto");

    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const nombre = document.getElementById("nombre").value.trim();

        const correo = document.getElementById("correo").value.trim();

        const asunto = document.getElementById("asunto").value.trim();

        const mensaje = document.getElementById("mensajeContacto").value.trim();

        // VALIDAR CAMPOS VACÍOS

        if (!nombre || !correo || !asunto || !mensaje) {

            mostrarMensaje("Todos los campos son obligatorios.", false);

            return;

        }

        // VALIDAR NOMBRE

        const expresionNombre = /^[\p{L}\s'-]+$/u;

        if (!expresionNombre.test(nombre)) {

            mostrarMensaje("El nombre contiene caracteres no válidos.", false);

            return;

        }

        // VALIDAR CORREO

        const expresionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!expresionCorreo.test(correo)) {

            mostrarMensaje("Ingresa un correo electrónico válido.", false);

            return;

        }

        // VALIDAR ASUNTO

        if (asunto.length < 3) {

            mostrarMensaje("El asunto debe tener al menos 3 caracteres.", false);

            return;

        }

        // VALIDAR MENSAJE

        if (mensaje.length < 10) {

            mostrarMensaje("El mensaje debe tener al menos 10 caracteres.", false);

            return;

        }

        mostrarMensaje(
            "¡Mensaje registrado correctamente! Gracias por contactarnos.",
            true
        );

        formulario.reset();

    });

    // FUNCIÓN PARA MOSTRAR RESULTADOS

    function mostrarMensaje(texto, correcto) {

        resultado.textContent = texto;

        resultado.className = correcto
            ? "mensaje-exito"
            : "mensaje-error";

    }

});