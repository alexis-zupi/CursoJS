/*
function solicitarDatos(valor, validacion, mensajeError) {
    validacion.test(valor) ? valor : alert(mensajeError);
}


//Eventos
nombreForm.addEventListener("input", function() {
    return solicitarDatos(nombreForm.value, new RegExp('^[a-zA-Z0-9]{1,20}$'), "Alfanumerico, minimo 1 caracter maximo 20");
});

apellidoForm.addEventListener("input", function() {
    return solicitarDatos(apellidoForm.value, new RegExp('^[a-zA-Z0-9]{1,20}$'), "Alfanumerico, minimo 1 caracter maximo 20");
});

edadForm.addEventListener("input", function() {
    if (edadForm.value === "") {
        alert("Debe ingresar una edad valida");
    }
});

emailForm.addEventListener("input", function() {
    if (emailForm.value === "") {
        alert("Debe ingresar un email valido. Es necesario que utilice @ejemplo.com");
    }
});

passForm.addEventListener("input", function() {
    if (passForm.value === "") {
        alert("Debe ingresar una contrasena valida");
    }
});


let formulario = document.querySelector("#formulario");
let info = document.querySelector(".info");

//Mostrar la informacion del formulario en el DOM
const mostrarInfo = formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    info.innerHTML = `
    <div class="mensajeCompra">
    <h5> Muchas gracias ${nombreForm.value} ${apellidoForm.value} por su compra!! Te contactaremos al email ${emailForm.value} para concretar su pedido  </h5>
    </div>
    `;
});

//Cuando le damos al boton 'Finalizar compra' se vacia el carrito por completo
let nombreForm = document.querySelector("#nombre");
let apellidoForm = document.querySelector("#apellido");
let edadForm = document.querySelector("#edad");
let emailForm = document.querySelector("#email");
let passForm = document.querySelector("#pass");

btnCarroComprar.addEventListener("click", () => validacionFormulario());
const btnCarroComprar = document.querySelector(".comprar");

const btnVaciar = document.querySelector(".enviar-form");
btnVaciar.addEventListener("click", () => {validacionFormulario()});
function validacionFormulario() {
    if(carrito.length === 0){
        errorCarritoVacio()
    }else{
        vaciarCarrito();
        compraExitosa();
    }
}

*/


let nombreForm = document.querySelector("#nameId");
let apellidoForm = document.querySelector("#surnameId");
let emailForm = document.querySelector("#emailId");
let passForm = document.querySelector("#passId");
let direForm = document.querySelector("#direccionId");
let numDireForm = document.querySelector("#numDirId");
let paisForm = document.querySelector("#paisId");
let ciudadForm = document.querySelector("#ciudadId");
let cdForm = document.querySelector("#cdId");

//validacion campos requeridos del formulario
function validacionFormVacio() {
    
    const form = document.querySelector('.needs-validation')
    
    form.addEventListener('submit', event => {
        console.log("evento", event)
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }else{
            event.preventDefault();
            validacionFormulario(form)
        }
        form.classList.add('was-validated');
    }, false)
}
validacionFormVacio()

function validacionFormulario(form) {
    if(carrito.length === 0){
        console.log("Carrito", carrito)
        errorCarritoVacio()
    }else{
        vaciarCarrito();
        compraExitosa();
        form.reset();
        form.classList.remove('was-validated');
        console.table(form.classList)
    }
}

function errorCarritoVacio() {
    Swal.fire({
        icon: 'warning',
        title: 'No hay compras a realizar',
        text: 'Debe seleccionar un producto',
    })
}

function vaciarCarrito() {
    carrito = [];
    renderCarrito();
    
    eliminarTodosProdLocalStorage();
}

function compraExitosa() {
    Swal.fire({
        returnFocus: false,
        icon: 'success',
        title: 'Felicidades!',
        text: `Muchas gracias ${nombreForm.value} ${apellidoForm.value} por su compra!! Te contactaremos al email ${emailForm.value}... Datos destino: ${direForm.value}-${numDireForm.value}-${ciudadForm.value}-${cdForm.value}`,
    });
}
