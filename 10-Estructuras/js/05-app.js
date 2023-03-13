// switch case

const metodoPago = 'efectivo';

switch (metodoPago) {
    case 'efectivo':
        pagar();
        break;
    case 'cheque':
        console.log(`pagaste con ${metodoPago}`);
        break;
    default: 
        console.log('aun no seleccionas un metodo de pago');
        break;
}


function pagar(){
    console.log('pagando...')
}