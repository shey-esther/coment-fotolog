/*aquí va tu código*/
//funcion que guarda los nombres y comentarios
function guardar(){
	//valoracion de los imput
	var nombre = document.getElementById('clave').value;
	var comentario =document.getElementById('valor').value;
	localStorage.setItem(nombre,comentario);

	var comentarioG = document.getElementById('textSave');
	for (var i = 0; i < localStorage.length; i++) {

		var name = localStorage.key(i);
		var clave = localStorage.getItem(name);

		var div = document.createElement('div');
		div.setAttribute("id", "content");

		var h4 = document.createElement('h4');
		var nombre = document.createTextNode(name);
		

		var p = document.createElement('p');
		var comentarios = document.createTextNode(clave);

		h4.appendChild(nombre);
		p.appendChild(comentarios);
		div.appendChild(h4);
		div.appendChild(p);

		comentarioG.appendChild(div);		
	}
		document.getElementById('clave').value = "";
		document.getElementById('valor').value="";
}

//function  que elimina los nombres y comentarios que estan guardados
function limpiar(){
	localStorage.clear();
	var divCont = document.getElementById('content');
	divCont.parentNode.removeChild(divCont);
}

//guarda la funcion cada vez que se ingresa valores
$(document).ready(function(){
	guardar();
})


