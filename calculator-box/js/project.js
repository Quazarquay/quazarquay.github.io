/*The addition and subtracting clicks make the total say NaN, even when there were no issues left in the console.  What am I missing? Also when I tryed to make the colors work with jquery, I saved the jquery reference file and put it in the bottom of my HTML.  And using the code below from a previous exercise we did, while slightly changing it..

$("a").click(function() {
  $("p").css("color", $(this).html());
});

It wont change color and gives an error at the first line of the qjuery. Did I save the big jquery file wrong?
*/



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