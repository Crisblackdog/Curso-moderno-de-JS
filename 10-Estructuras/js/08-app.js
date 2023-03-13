const autenticado= true;

// if(autenticado === true);
if(autenticado);
    console.log('el usuario esta autenticado')

const puntaje = 500;

// if(puntaje > 300) {
//     console.log('buen puntaje... felicidades')
// } else if ( puntaje >400){
//     console.log('exelente!!!')
// }

function revisarPuntaje (){
    if( puntaje > 400 ){
        console.log('Exelente!!')
        return;
    }

    if(puntaje > 300){
        console.log('BUEN PUNTAJE HDP')
        return;
    }
}

revisarPuntaje();