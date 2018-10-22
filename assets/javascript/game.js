var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
        "https://cdn.shopify.com/s/files/1/1911/3007/products/Adundance-Quartz-Crystal-Candle_4816eb0f-4728-422e-bdb3-b5f0b9b2731d.jpg?v=1536772508",
        "https://images-na.ssl-images-amazon.com/images/I/71Imq3vXaGL._SL1440_.jpg",
        "https://vignette.wikia.nocookie.net/mgefanon/images/6/69/Kinetic_Crystal.jpg/revision/latest?cb=20150409231719",
        "https://battlecampbible.cdn.bcrank.us/181/img/cs-crystal.png"
    ];
   
    randomResult = Math.floor(Math.random() * 69 ) + 30; 

    $("#result").html("Random Result: " + randomResult);

    for (var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() * 11) + 1;
        //console.log(random);

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random" : random,
            });  
           
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size" : "cover"
            });

        $(".crystals").append(crystal);
    
    }

    $("#previous").html("Total Score: " + previous);
};


resetAndStart();



$(document).on("click", ".crystal", function() {
    
    var num = parseInt($(this).attr("data-random"));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    console.log(previous);

    if(previous > randomResult){
        lost++;
        $("#lost").html("You Lost: " + lost);
        previous = 0;
        resetAndStart();
    }
    else if( previous === randomResult){
        win++;
        $("#win").html("You Won: " + win);
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