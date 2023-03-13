document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        asunto: '',
        mensaje: ''
    }

    



    const inputEmails = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#enviar-mail');
    const btnSubmit = document.querySelector('#formulario button[type=submit]');

    // asignar eventos
    inputEmails.addEventListener('blur', validar);

    inputAsunto.addEventListener('blur', validar);

    inputMensaje.addEventListener('blur', validar);

    function validar(e){

        if(e.target.value.trim() === ''){
            mostrarAlerta(`el campo ${e.target.id} es obligatorio`,e.target.parentElement);
            return;
        }
        if (e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('el email no es valido', e.target.parentElement);
            return;
        };

        limpiarAlerta(e.target.parentElement);

        // asignar los valores

        email[e.target.name] = e.target.value.trim().toLowerCase();

        // comprobar email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);


        // generar una alerta de html
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white','p-2','text-center');

        // inyectar el erro al formulario
        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.bg-red-600');
            if(alerta){
                alerta.remove()
            }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
        const resultado = regex.test(email)
        return(resultado);
    }

    function comprobarEmail(){
        console.log(Object.values(email).includes('')){

        }
        }
    


});
