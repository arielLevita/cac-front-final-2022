let btnResumen = document.getElementById("btn-resumen");
let btnBorrar = document.getElementById("btn-borrar");

btnResumen.addEventListener("click", (e) => {
    e.preventDefault();
    let cant = document.getElementById("inputCantidad").value;
    let categ = document.getElementById("inputCategoria").value;
    if (categ == 'estudiante') {
        return document.getElementById("precioTotal").innerHTML = (200 * 0.2 * cant);
    } else if (categ == 'trainee') {
        return document.getElementById("precioTotal").innerHTML = (200 * 0.5 * cant);
    } else {
        return document.getElementById("precioTotal").innerHTML = (200 * 0.85 * cant);
    }
});

btnBorrar.addEventListener("click", (e) => {
    e.preventDefault();
    document.forms[0].reset();
    document.getElementById("precioTotal").innerHTML = "";
});
