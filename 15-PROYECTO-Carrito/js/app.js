// Variables
const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() { 
    // Cuando agregas un curso presionando "Agregar al Carrito"
    listaCursos.addEventListener('click', agregarCurso); 

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso)

    // vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; // reset carrito

        limpiarHTML();
    })
}


//funciones 
function agregarCurso(e) {
   e.preventDefault();


    if (e.target.classList.contains('agregar-carrito') ){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
  
}
//elimina curos del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso') ){
        const cursoId = e.target.getAttribute('data-id');

        //elimina del arreglo de aritucosCarrito por el data-ID
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        carritoHTML(); // iterar sobre l html para borrar el carrito
}}

// lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    console.log(curso);

    //crear obajeto con el contenido del curso actual
    const infoCurso ={
        imagen: curso.querySelector('img').src,
        titulo : curso.querySelector('h4').textContent,
        precio : curso.querySelector('.precio span').textContent,
        id : curso.querySelector('a').getAttribute('data-id'),
        cantidad : 1
    }

    //revisa si un elemento existe en el carrito
    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id);
    if(existe)  {
        //Actualizar cantidad
        const curso = articulosCarrito.map( curso =>{
            if (curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            }
        });
        articulosCarrito = [...curso];
    }else {
        // Agregamos el curso al carrito
        // agregar elementos  al arreglo del carrrito  
    articulosCarrito = [...articulosCarrito, infoCurso]
    }

    

    console.log(articulosCarrito);
    carritoHTML();
}


// MUESTRA EL CARRITO DE COMPRA EN EL HTML  
function carritoHTML(){
    
    // limpia el HTML
    limpiarHTML();

    //recorre el carrito y genera el html
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, id, cantidad} = curso
        const row = document.createElement('tr')
        row.innerHTML = `
        <td>
            <img src="${imagen}" width = "100">
        </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td>
            <a href="#" class= "borrar-curso" data-id="${id}"> x </a>
        </td>
        `;
       
        //agrega el html al tbody
        contenedorCarrito.appendChild(row)
    })
}

//Elmina los cursos del tbody

function limpiarHTML(){
    //forma lenta
    //contenedorCarrito.innerHTML= '';
    while (contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}