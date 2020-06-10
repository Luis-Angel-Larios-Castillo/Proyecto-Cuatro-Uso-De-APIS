//callback en Foreache


const ciudades= ['Londres', 'New York', 'Madrid', 'Paris', 'Viena'];


//Inline Callback
ciudades.forEach(function(ciudad){
    console.log(ciudad);

})

//con la funcion definida

/*
function callback(ciudad){
    console.log(ciudad);
}
ciudades.forEach(callback);
*/