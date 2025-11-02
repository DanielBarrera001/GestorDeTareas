function agregarNuevaTareaListado() {
    tareaListadoViewModel.tareas.push(new tareaElementoListadoViewModel({ id: 0, titulo: '' }));

    $("[name=titulo-tarea]").last().focus();
}

async function manejarFocusOutTituloTarea(tarea) {
    const titulo = tarea.titulo();
    if (!titulo) {
        tareaListadoViewModel.tareas.pop();
        return;
    }

    const data = JSON.stringify(titulo);
    const respuesta = await fetch(urlTareas, {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (respuesta.ok) {
        const json = await respuesta.json();
        tarea.id(json.id);
    } else {
        //Error
    }
}

async function obtenerTareas() {
    tareaListadoViewModel.cargando(true);

    const respuesta = await fetch(urlTareas, {
        method: 'GET',
        headers: {
            'Content-Type' : 'application/json'
        }
    })

    if (!respuesta.ok) {
        return;
    }

    const json = await respuesta.json();
    tareaListadoViewModel.tareas([]);

    json.forEach(valor => {
        tareaListadoViewModel.tareas.push(new tareaElementoListadoViewModel(valor));
    });

    tareaListadoViewModel.cargando(false);
}
