


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento,
// });


function calcularPrecioConDescuento() {
    const input = inputPrecio;
    const input2 = inputDescuento;
    const precio = input.value;
    const descuento = input2.value;
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const precio = document.getElementById("inputPrecio");
    const valorPrecio = precio.value;
    const descuento = document.getElementById("inputDescuento");
    const valorDescuento = descuento.value;

    const precioConDescuento = calcularPrecioConDescuento(valorPrecio, valorDescuento);

    const resultadoPrecio = document.getElementById("resultadoPrecio");
    resultadoPrecio.innerText = `El precio final a pagar es: ${precioConDescuento}$`;
}