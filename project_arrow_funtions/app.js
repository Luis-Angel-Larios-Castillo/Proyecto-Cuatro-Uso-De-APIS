// funcion

let aprendiendo;

aprendiendo = function(){
    console.log('Aprendiendo Java Script');

}


aprendiendo = () => {
    console.log('Aprendiendo Java Script');

}

//una linea no requiere llave

aprendiendo = () => console.log('Aprendiendo Java Script');
//retorna valor
aprendiendo = () => 'Aprendiendo Java Script';
//retorna objeto
aprendiendo = () => ({ aprendiendo: 'Aprendiendo Java Script'});

//retorna paramentros
aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

//pasando 1 paramentro
aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);
//pasando 2 paramentros
aprendiendo = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} y ${tecn2}`);

const productos = ['Disco', 'Camisa', 'Guitarra'];
/*
const letrasProducto = productos.map(function(producto){
    return producto.length;

});

const productos = ['Disco', 'Camisa', 'Guitarra'];
const letrasProducto = productos.map(producto =>{
    return producto.length;

});

const productos = ['Disco', 'Camisa', 'Guitarra'];
const letrasProducto = productos.map(producto => producto.length);


console.log(letrasProducto);

productos.forEach(function(producto){

    console.log(producto);
})

productos.forEach(producto => {

    console.log(producto);
})

*/

productos.forEach(producto => console.log(producto));