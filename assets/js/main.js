
//evento addEventListener Click
var boton = document.getElementById('demo');
boton.addEventListener('click', function() {
    this.innerHTML = "<strong>" + "¡HOLA MUNDO!" + "<strong>";
});

//onload 
function PaginaCargada(){
	alert("la pagina esta cargada ! ")

};
//onmouseover
function sobreMi(){
	alert("Estas sobre mi ");
};
//onmouseout
function noSobreMi(){
	alert("No estas sobre mi ");
};


