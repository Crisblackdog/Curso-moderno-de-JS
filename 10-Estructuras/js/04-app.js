

const dinero = 300 ;
const totalAPagar = 500;
const tarjeta = true;
const cheque = false;

if( dinero >= totalAPagar ){
    console.log('si podemos pagar');
} else if(cheque){
    console.log('si puedo pagar por que tengo la cheque');
}else if(tarjeta){
    console.log('si puedo pagar por que tengo la tarjetas');
}else {
    console.log('no podemos pagar...');
}