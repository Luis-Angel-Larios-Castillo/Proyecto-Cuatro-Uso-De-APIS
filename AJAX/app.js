document.getElementById('cargar').addEventListener('click', cargarDatos);


function cargarDatos() {
	//crear el objeto xmlhttprequest
	const xhr = new XMLHttpRequest();

	//abrir la conexion
	xhr.open('GET', 'datos.txt', true);

	// una vez que carga
	//xhr.onload = function(){

	/*	// 200 : Correcto | 403 : Prohibido | 404: No encontrado
		if (this.status === 200) {
			document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;

		}
	}*/

	

	xhr.onreadystatechange = function(){
		console.log(`Estado ${this.readyState}`);
		if (this.readyState === 4 && this.status === 200){
			//console.log(this.responseText);

		}
		
	}

	// ready states
	/*
		0- No inicializado
		1- conexion establecida
		2- Recibido
		3- procesando
		4- Respuesta lista


	*/



	// Enviar el request
	xhr.send();

}