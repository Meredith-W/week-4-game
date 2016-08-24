var ruby = Math.floor((Math.random()* 12) + 1);
var sapphire = Math.floor((Math.random()* 12) + 1);
var citrine = Math.floor((Math.random()* 12) + 1);
var emerald = Math.floor((Math.random()* 12) + 1);

var won= 0;
var lost= 0;
var userScore= 0;
var compNum= Math.floor((Math.random()* 119) + 1);


var updateAddition = function(){
	$("#userScore").empty();
	$("#userScore").append(userScore);
	$(".won").empty();
	$(".won").append(won);
	$(".lost").empty();
	$(".lost").append(lost);
}

var restart = function(){
	userScore= 0;
	compNum= Math.floor((Math.random()* 100) + 19);
	
	$("#compNum").empty();
	$("#compNum").append(compNum);

	ruby = Math.floor((Math.random()* 12) + 1);
    sapphire = Math.floor((Math.random()* 12) + 1);
    citrine = Math.floor((Math.random()* 12) + 1);
    emerald = Math.floor((Math.random()* 12) + 1);

    updateAddition();
}

var logic= function(){
	if (userScore == compNum){
		won= won + 1;
		restart();
	}else if (userScore > compNum){
		lost= lost + 1;
		restart();
	}else{
		updateAddition();
	}
}

$("#userScore").append(userScore);
$("#compNum").append(compNum);

$(document).ready(function(){
	$(".ruby").on('click', function(){
		userScore = userScore + ruby;
		logic();
	})
	$(".sapphire").on('click', function(){
		userScore = userScore + sapphire;
		logic();
	})
	$(".citrine").on('click', function(){
		userScore = userScore + citrine;
		logic();
	})
	$(".emerald").on('click', function(){
		userScore = userScore + emerald;
		logic();
	})
	$("#startbtn").on('click', function(){
	location.reload();
})

});