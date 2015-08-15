$(document).ready(function(){

	$("#human").click(function(){
		$("#human").animate({
			"height": "50px",
			"width": "50px"
		},3000);
	});

	$("#chicken").click(function(){
		$("#chicken").animate({
			"left": "50px"},3000);
	});

	$("#cow41").click(function(){
		$("#cow41").animate({
			"bottom": "50px"},3000);
	});

	$("#cow1").click(function(){
		$("#cow1").animate({
			"height": "500px"},3000);
	});

	$("#farm").click(function(){
		$("#farm").animate({
			"top": "50px"},300);
	});

	$("#sun").click(function(){
		$("#sun").animate({
			"right": "50px"},3000);
	});


	$("#varken").click(function(){
		$("#varken").animate({
			"right": "100px"},300);
	});
});