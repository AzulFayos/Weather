var nombre = null;
var ciudad = null;
var pais = null;

function consultaAPI(nombre, ciudad, pais) {

    const appId = "9b2c7617c90c8631ef3462af3c943618";
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&lang=es`;

    fetch(url)
        .then((respuesta) => {
            return respuesta.json()
        })
        .then((datos) => {
            extraerWeather(datos);
        })
        .catch((error) => {
            errores(error);
        });
}

function enviar() {
    nombre = document.getElementById("nombre").value;
    pais = document.getElementById("pais").value;
    ciudad = document.getElementById("ciudad").value;
 
    //document.tiempoform.submit()
    consultaAPI(nombre, ciudad, pais);
}

function extraerWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('description').innerHTML = d.weather[0].description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
}

function errores(){
    //if ((tiempoform.nombre.checked == "") && (tiempoform.ciudad.checked == "") && (tiempoform.pais.checked == "")) {
        alert("Debes indicar Nombre, Ciudad y País"); 
    //}
}