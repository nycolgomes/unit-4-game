var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

    $(".crystals").empty();
   
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
            
            crystal.html(random);

        $(".crystals").append(crystal);
    
    }
}

resetAndStart();



$(document).on("click", ".crystal", function() {
    
    var num = parseInt($(this).attr("data-random"));

    previous += num;

    console.log(previous);

    if(previous > randomResult){
        lost--;
        $("#lost").html(lost);
        previous = 0;
        resetAndStart();
    }
    else if( previous === randomResult){
        win++;
        $("#win").html(win);
        previous = 0;
        resetAndStart();
    }
    
    

});



// a game with 4 crystals and random result 
// every crystal needs to have a random number (1-12)
// when clicking any crystal, it should be adding with the previous result 
// until it equals the random result
// if it is greater that the result, than we decrement a lost counter
// if it is equal, than the increment a win counter
// a new random number should be generated everytime we win or lose