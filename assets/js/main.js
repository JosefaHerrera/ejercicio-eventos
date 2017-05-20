
//evento addEventListener Click
var boton = document.getElementById('demo');
boton.addEventListener('click', function() {
    this.innerHTML = "<strong>" + "¡HOLA MUNDO!" + "<strong>";
});

function PaginaCargada(){
	alert("la pagina esta cargada ! ")

};

function sobreMi(){
	alert("Estas sobre mi ");
};

function noSobreMi(){
	alert("No estas sobre mi ");
};


