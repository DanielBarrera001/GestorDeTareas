function manejarClickAgregarPaso() {

    const indice = tareaEditarVM.pasos().findIndex(p => p.esNuevo());

    if (indice !== -1) {
        return;
    }

    tareaEditarVM.pasos.push(new pasoViewModel({ modoEdicion: true, realizado: false }));
    $("[name=txtPasoDescripcion]:visible").focus();
}

function manejarClickCancelarPaso(paso) {
    if (paso.esNuevo) {
        tareaEditarVM.pasos.pop();
    } else {

    }
}

async function manejarClickSalvarPaso(paso) {
    paso.modoEdicion(false);
    const esNuevo = paso.esNuevo();
    const idTarea = tareaEditarVM.id;
    const data = obtenerCuerpoPeticionPaso(paso);

    if (esNuevo) {
        await insertarPaso(paso, data, idTarea);
    } else {

    }
}

async function insertarPaso(paso, data, idTarea) {
    const respuesta = await fetch(`${urlPasos}/${idTarea}`, {
        body: data,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (respuesta.ok) {
        const json = await respuesta.json();
        paso.id(json.id);
    } else {
        manejarErrorApi(respuesta);
    }
}

function obtenerCuerpoPeticionPaso(paso) {
    return JSON.stringify({
        descripcion: paso.descripcion(),
        realizado: paso.realizado()
    });
}