var celsius = document.getElementById("celsius").value;
var fahrenheit = document.getElementById("fahrenheit").value;


document.getElementById("clickCelToFah").onclick = calculateCToF;

function calculateCToF() {
	var celsius = document.getElementById("celsius").value;
	var fahrenheit = document.getElementById("fahrenheit").value;

	var turnIntoF = celsius*1.8+32;
	document.getElementById("turnIntoF").innerHTML = turnIntoF;
}



document.getElementById("clickFahToCel").onclick = calculateFToC;

	function calculateFToC() {
	var celsius = document.getElementById("celsius").value;
	var fahrenheit = document.getElementById("fahrenheit").value;

	var turnIntoC = (fahrenheit-32)/1.8;
	document.getElementById("turnIntoC").innerHTML = turnIntoC;
}