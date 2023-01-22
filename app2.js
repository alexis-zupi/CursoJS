
const inputSearch = document.querySelector("#inputSearch");
//Filtramos pruductos para Buscador
const filtrarProd = () => {
    //let busquedaUsuario = inputSearch.value.trim().toLowerCase();
    let resultadoBusqueda = productos.filter(prod => prod.nombre.includes(inputSearch.value.trim().toLowerCase()));
    if (resultadoBusqueda.length > 0) {
        cargarEtiqueta(resultadoBusqueda);
    }
}
//Registramos el "Tipo de evento" en la funcion
inputSearch.addEventListener("search", filtrarProd);


//ESTE ES EL QUE LE VA
/*
const contEtiquetas = document.querySelector("#contenedor-etiq");
fetch("./data.json")
    .then((resp) => resp.json())
    .then((dataProd) => {
        dataProd.forEach((producto) => {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="contenedor-etiquetas">
                <img src="${producto.img}" alt="">
                <div class="texto-etiquetas">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.desc}</p>
                    <p>Precio: $${producto.precio}</p>
                </div>
                <button id="${producto.id}" class="btn-comprar">Comprar</button>
            </div>
            `;
            contEtiquetas.append(div);
        });
    });
*/

/*

const productos = async () => {
    const res = await fetch("./data.json");
    const data = await res.json();
    data.forEach((post) => {
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="contenedor-etiquetas">
        <img src="${post.img}" alt="">
        <div class="texto-etiquetas">
        <h3>${post.nombre}</h3>
        <p>${post.desc}</p>
        <p>Precio: $${post.precio}</p>
        </div>
        <button id="${post.id}" class="btn-comprar">Comprar</button>
        </div>
        `;
        contEtiquetas.append(div);
    })
}
productos();

*/


const contEtiquetas = document.querySelector("#contenedor-etiq");
//Cargamos los datos de las Etiquetas en el HTML
const armarEtiqueta = (prod) => {
    return `
    <div class="contenedor-etiquetas">
    <img src="${prod.img}" alt="">
    <div class="texto-etiquetas">
    <h3>${prod.nombre}</h3>
    <p>${prod.desc}</p>
    <p>Precio: $${prod.precio}</p>
    </div>
    <button id="${prod.id}" class="btn-comprar">Comprar</button>
    </div>
    `;
}  

const cargarEtiqueta = (array) => {
    let tabla = ""; 
    if (array.length > 0) {
        array.forEach(prod => {
            tabla += armarEtiqueta(prod);
        })
        contEtiquetas.innerHTML = tabla;
    }
}
cargarEtiqueta(productos);



//Calcular el precio total de la compra
function calcularTotal() {
    let totalCarrito = document.getElementById("totalCompra")
    let precioTotal = carrito.map((item) =>  item.producto.precio).reduce((total, prod) => {
        total += prod
        return total
    }, 0)
    totalCarrito.innerHTML = `Total a pagar: ${precioTotal}`;
}



const btnComprar = document.querySelectorAll(".btn-comprar");
//Creo array vacio al que luego le carga los datos de productos seleccionados
let carrito = [];
//Traigo los datos obtenidos en el boton
btnComprar.forEach((button) => {
    button.addEventListener("click", (e) => {
        agregarCarrito(parseInt(e.target.id));
    });
});

function agregarCarrito(id) {
    let producto = productos.find(p => p.id === id);
    let productoCarrito = carrito.find(p => p.producto.id === id);
    if (productoCarrito) {
        productoCarrito.cantidad++ 
    }else{
        productoCarrito = {
            producto: producto,
            cantidad: 1
        }
        carrito.push(productoCarrito);
    }

    renderCarrito();
    calcularTotal();
}

//Cargo las etiquetas al HTML
function renderCarrito() {
    const carritoHTML = document.querySelector(".carroCompra");
    carritoHTML.innerHTML = "";
    let tarjetas = carrito.map((item) => {
        return `
        <div class="contenedor-carrito">
            <img src="${item.producto.img}" alt="" class="img-carrito">
            <div>
                <p class="parrafo-carrito">Caracteristicas</p>
                <h3>${item.producto.nombre}</h3>
            </div>
            
            <div>
                <p class="parrafo-carrito">Caracteristicas</p>
                <p>${item.producto.desc}</p>
            </div>
            <div>
                <p class="parrafo-carrito">Precio</p>
                <p>$${item.producto.precio}</p>
            </div>
            <div>
                <p class="parrafo-carrito">Cantidad</p>
                <p>${item.cantidad}</p>
            </div>
                
            <a onclick="eliminarCarrito(event)" class="btn-eliminar">
                <i class="fa-solid fa-trash" id="${item.producto.id}"></i>
            </a>
        </div>
        `;
    });

    tarjetas.forEach((tarjeta) => carritoHTML.innerHTML += tarjeta);

    guardarProductosLocalStorage(carrito);  
}

//Elimino '1' producto del carro de compras
function eliminarCarrito(e) {
    let itemCarrito = carrito.find(item => item.producto.id === parseInt(e.target.id));
    if (itemCarrito && itemCarrito.cantidad > 1) {
        itemCarrito.cantidad--
    }else{
        carrito = carrito.filter((itemCarrito) => {
            return itemCarrito.producto.id !== parseInt(e.target.id);    
        });
    }
    renderCarrito();
    calcularTotal();

    eliminarProductoLocalStorage(e);
}



//Agregamos los productos seleccionados al localStorage
function guardarProductosLocalStorage(producto){
    let productos = obtenerProductosLocalSotorage();
    productos.push(producto);
    //Convertimos los productos en una cadena de texto JSON
    localStorage.setItem('productos', JSON.stringify(productos));
}

//Obtengo el valor de lo que paso por parametro (getItem)
function obtenerProductosLocalSotorage(){
    let productoLS = [];

    localStorage.getItem('productos') === null ? productoLS : productoLS = JSON.parse(localStorage.getItem('productos'));

    return productoLS;
}

function eliminarProductoLocalStorage(prodId){
    let productoLS = obtenerProductosLocalSotorage();
    productoLS.forEach(function(productoLS, index){
        if (productoLS.id === prodId) {
            productoLS.splice(index, 1);
        }
    });

    localStorage.setItem('productos', JSON.stringify(productoLS)); 
}

function eliminarTodosProdLocalStorage() {
    localStorage.removeItem('productos');
}
