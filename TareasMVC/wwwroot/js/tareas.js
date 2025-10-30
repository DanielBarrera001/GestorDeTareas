function agregarNuevaTareaListado() {
    tareaListadoViewModel.tareas.push(new tareaElementoListadoViewModel({ id: 0, titulo: '' }));

    $("[name=titulo-tarea]").last().focus();
}

function manejarFocusOutTituloTarea(tarea) {
    const titulo = tarea.titulo();
    if (!titulo) {
        tareaListadoViewModel.tareas.pop();
        return;
    }

    tarea.id(1);
}