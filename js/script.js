var formulario = document.getElementById('compra-form');

var nombre = document.getElementById('name');

var apellido = document.getElementById('lastName');

var correo  = document.getElementById('email');

var cantidad = document.getElementById('cantidad');

var categorias = document.querySelector('#cat');

var mensaje = document.getElementById('datosVacios');

var mensajeMonto = document.getElementById('monto');

var xd = document.getElementById('xd');

var validacion = true;

var bonus;

var monto;

formulario.onsubmit = function(e) {

    console.log('enviando formulario...');

    validacion = true;

    if (nombre.value === ''  || apellido.value === '' || correo.value === '' || cantidad.value === '' || categorias === ''){
        e.preventDefault();
        mensaje.textContent = 'Hay datos sin rellenar';
        validacion = false;
    }

    if (validacion == true){

        console.log('funciona');

        console.log(categorias.value);

        switch(categorias.value){

            case "1" : bonus = 0.80;
            break;

            case "2" : bonus = 0.50;
            break;

            case "3" : bonus = 0.85;
            break;
            
        }
        
        monto = 200 * bonus * cantidad.value;
    
        mensajeMonto.textContent = 'Total a Pagar: $' + monto;

        mensaje.textContent = '';

        e.preventDefault();

    }

    categorias.addEventListener('change' , function(){  //Controlar los datos a mandar del Select de compra.html
        console.log(this.options[this.selectedIndex].value)
        console.log(this.options[this.selectedIndex].innerText)
    })
    
}
