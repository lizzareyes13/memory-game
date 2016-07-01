var cardContents = [
  "color1", "color1", "color2", "color2", "color3", "color3"
];
var oneCardTurnedAround = false;

cardContents = cardContents.sort(function(a,b){
  return Math.random() - 0.5;
});

for (var i =0; i < 6; i++ )
  $("#card-container").append(`<div index="`+i+`" class="card"></div>`);

$(".card").on("click", function(){
  var idx = Number($(this).attr("index"));
  $(this).addClass(cardContents[idx]);
  if ( typeof(oneCardTurnedAround) == "number" ){
        //console.log("oneCardTurnedAround if statement");
    if (cardContents [idx] === cardContents[oneCardTurnedAround] &&
        idx != oneCardTurnedAround){
      console.log("found same card");
      $("."+cardContents[idx]).css("visibility", "hidden");
      oneCardTurnedAround = false;
    }
    else {
      $(this).removeClass(cardContents[idx]);
      $("."+cardContents[oneCardTurnedAround]).
      removeClass(cardContents[oneCardTurnedAround]);
      oneCardTurnedAround = false;

    }
  }
  else{
    //console.log("oneCardTurnedAround truthy");
    oneCardTurnedAround = idx;
  }
});
