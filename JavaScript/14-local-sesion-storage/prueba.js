function guardarSeguro(clave, valor) {
    try {
        localStorage.setItem(clave, valor);
    } catch (e) {
        if (e instanceof DOMException &&
            (e.name === "QuotaExceededError" ||
                e.name === "NotAllowedError")) {
            console.warn(
                "No se pudo guardar: almacenamiento lleno o bloqueado.");
        } else {
            throw e; 
        }
    }
}

