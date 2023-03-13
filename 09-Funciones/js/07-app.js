iniciarApp();

function iniciarApp(){
    console.log('Iniciando APP...');
    
    segundaFuncion();
}



function segundaFuncion() {
    console.log('desde la segunda funcion');
    usuarioAutenticado('Pablo')
}


function usuarioAutenticado(usuario){
    console.log('Autenticando el usuario... ESPERE');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}