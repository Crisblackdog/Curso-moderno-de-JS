const carrito =[
    {nombre: 'monitor 27 pulgadas', precio: 500},
    {nombre: 'Televesion', precio: 100},
    {nombre: 'tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]

const nuevoArreglo = carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`
)

const nuevoArreglo2 = carrito.forEach(producto => console.log(`${producto.nombre} - precio: ${producto.precio}`))

console.log(nuevoArreglo);