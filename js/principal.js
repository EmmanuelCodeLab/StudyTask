document.addEventListener("DOMContentLoaded", function () {

    const totalTareas = document.getElementById("totalTareas");
    const tareasPendientes = document.getElementById("tareasPendientes");
    const tareasCompletadas = document.getElementById("tareasCompletadas");

    let tareas = [];

    try {
        tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    } catch (error) {
        console.error("Error al recuperar las tareas:", error);
    }

    const total = tareas.length;

    const pendientes = tareas.filter(function (tarea) {
        return !tarea.completada;
    }).length;

    const completadas = tareas.filter(function (tarea) {
        return tarea.completada;
    }).length;

    totalTareas.textContent = total;
    tareasPendientes.textContent = pendientes;
    tareasCompletadas.textContent = completadas;

});
