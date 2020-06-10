//Listado de paises
const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];


//se agrega un pais despues de 2 segundos
function nuevoPais(pais, callback){

    setTimeout(function(){
        paises.push(pais);
        callback();

    }, 2000);
}


//Los paises se muestran despues de 1 segundo
function mostrarPaises(){

    setTimeout(function(){
        let html='';
        paises.forEach(function(pais){
            html += `<li>${pais}</li>`;
        });

        document.getElementById('app').innerHTML = html;


    }, 1000);
}

//agregar nuevo pais
nuevoPais('Alemania', mostrarPaises);


//mostrar los paises
mostrarPaises();