//Addition//

document.getElementById("a10").onclick = function() {
	var total = document.getElementById("total").value;


	document.getElementById("total").innerHTML = total+10;
}


document.getElementById("a20").onclick = function() {
	var total = document.getElementById("total").value;


	document.getElementById("total").innerHTML = total+10;
}

document.getElementById("a30").onclick = function() {
	var total = document.getElementById("total").value;


	document.getElementById("total").innerHTML = total+10;
}








//Subtraction//


document.getElementById("m10").onclick = function() {
	var total = document.getElementById("total").value;


	document.getElementById("total").innerHTML = total-10;
}

document.getElementById("m20").onclick = function() {
	var total = document.getElementById("total").value;


	document.getElementById("total").innerHTML = total-20;
}

document.getElementById("m30").onclick = function() {
	var total = document.getElementById("total").value;


	document.getElementById("total").innerHTML = total-30;
}




//Colors//

$(".colors").click(function() {
  $("#total").css("background-color", $(this).html());
});