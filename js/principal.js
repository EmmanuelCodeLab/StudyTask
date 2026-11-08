document.addEventListener("DOMContentLoaded", function () {

```
const tareas = JSON.parse(localStorage.getItem("tareas")) || [];

const total = tareas.length;

const pendientes = tareas.filter(function (tarea) {
    return !tarea.completada;
}).length;

const completadas = tareas.filter(function (tarea) {
    return tarea.completada;
}).length;

document.getElementById("totalTareas").textContent = total;

document.getElementById("tareasPendientes").textContent = pendientes;

document.getElementById("tareasCompletadas").textContent = completadas;
```

});
