$(document).ready(function(){
	$("#menu-toggle").click(function(){
		$("nav").fadeToggle(800);
		$("#menu-toggle").fadeToggle(300);
	});
});