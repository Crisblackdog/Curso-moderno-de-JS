
const usuario= true;
const puedePagar = true;

if(usuario && puedePagar) {
    console.log ('si puedes comprar');
} else if (!usuario){
    console.log('inicia sesion o saca una cuenta');
} else if (!usuario && !puedePagar){
    console.log('fondos insuficientes');
} else if (!puedePagar){
    console.log('fondos insuficientes');
} 