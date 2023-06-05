const textoCupon = document.querySelector('#cuponTexto');
const subTotal = document.querySelector('.subTotal');
const descuento = document.querySelector('.descuento');
const total = document.querySelector('.total');


function descuentoTienda(porcentaje){

    let cupon = textoCupon.value;
     
    if(cupon == 'PLATZI'){
        let precio = subTotal.textContent;
        let resultado = (precio* (100-porcentaje))/100
        let precioDescuento = precio-resultado;
        descuento.innerText = precioDescuento;
        total.innerText = resultado;
    }
}

