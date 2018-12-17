$("#sh").click(function (e) { 
	e.preventDefault();
	$("#aa").css("visibility","visible");
	
});  
$("#close").click(function (e) { 
	e.preventDefault();
	$("#aa").css("visibility","hidden");
});

var card= $(".card");


card.mouseover(function(){
	$($(this)[0].children[1]).css("display", "block");
})

card.mouseout(function(){
	$($(this)[0].children[1]).css("display", "none");
})


