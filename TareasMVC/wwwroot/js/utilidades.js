async function manejarErrorApi(respuesta) {
    let mensajeError = '';

    if (respuesta.status === 400) {
        mensajeError = await respuesta.text();
    } else if (respuesta.status === 404) {
        mensajeError = recursoNoEncontrado
    } else {
        mensajeError = errorInesperado;
    }

    mostrarMensajeError(mensajeError)
}

function mostrarMensajeError(mensaje){
    swal.fire({
        icon: 'error',
        title: 'Error...',
        text: mensaje
    });
}

function confirmarAccion({ callBackAceptar, callBackCancelar, titulo }) {
    Swal.fire({
        title: titulo || '¿Realmente deseas borrar?',
        icon: 'warning',
        showCancelButton:true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        focusConfirm: true
    }).then((resultado) => {
        if (resultado.isConfirmed) {
            callBackAceptar();
        } else if(callBackCancelar) {
            callBackCancelar();
        }
    })
}

function descargarArchivo(url, nombre) {
    console.log("Intentando descargar la URL:", url); 
    var link = document.createElement('a');
    link.download = nombre;
    link.target = "_blank";
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link; 
}