var randomResult;
var lost;
var win;

randomResult = Math.floor(Math.random() * 69 ) + 30; 


$("#result").html("Random Result: " + randomResult);

for (var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random" : random
        });    
    
    $(".crystals").append(crystal);
   
}

$(".crystal").on("click", function() {
    console.log($(this).attr("data-random"));
});



// a game with 4 crystals and random result 
// every crystal needs to have a random number (1-12)
// a new random number should be generated everytime we win or lose
// when clicking any crystal, it should be adding with the previous result 
// until it equals the random result
// if it is greater that the result, than we decrement a lost counter
// if it is equal, than the increment a win counter