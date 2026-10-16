var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];
var start = false;
var level = 0;
$(document).keydown(function(event){
   if(!start){
      $("#level-title").text("Level  " + level);
      nextSequence();
      start = true;
   }
})
$(".btn").click(function(){


      var userChosenColour = $(this).attr("id");
      userClickedPattern.push(userChosenColour);
      playSound(userChosenColour);
      //console.log(userClickedPattern);
      animatePress(userChosenColour);
      checkAnswer(userClickedPattern.length-1);

});
function checkAnswer(currentlevel)
{
    if(gamePattern[currentlevel] == userClickedPattern[currentlevel])
    {
      console.log("true");

    
    if(userClickedPattern.length === gamePattern.length){
    setTimeout(nextSequence(),1000);
    }
  }
  else{
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over")},200);
    $("h1").text("Game Over, Press Any Key to Restart");
    startover();
  }
    
}


function nextSequence() {
   userClickedPattern = [];
   level++;
   $("#level-title").text("Level  " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
  
}
function playSound(name){
   var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
  }
function startover()
{
  level = 0;
  gamePattern = [];
  start = false;
}



