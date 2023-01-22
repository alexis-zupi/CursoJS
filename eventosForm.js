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
        errorCarritoVacio()
    }else{
        vaciarCarrito();
        calcularTotal();
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
