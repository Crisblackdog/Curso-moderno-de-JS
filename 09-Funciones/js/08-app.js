
function sumar(a,b){
    return a + b;
}

const resultado = sumar(5,6);

console.log(resultado)

// ejemplo avanzado
let total = 0 ;
function agregarCarrito(precio){
    return total += precio;
}
function calcularImpuesto(total){
    return total * 1.19
}

total = agregarCarrito(300)
total = agregarCarrito(5500)
const totalPagar = calcularImpuesto(total)

console.log(`el total a pagar es de : ${totalPagar}`)

console.log(total)