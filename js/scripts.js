//Biz logic copied from ping pong assignment
function CocktailMaker(liquor, mixer, garnishes) {
  var numberArray = []
  for (var index = 1; index <= numberAbs; index += 1) {

    if (index % 15 == 0) {
      numberArray.push("pingpong")
    } else if (index % 5 == 0) {
      numberArray.push("pong")
    } else if (index % 3 == 0) {
      numberArray.push("ping")
    } else {
      numberArray.push(index)
    }
  }
  return numberArray;
};

//UI logic
$(document).ready(function() {
  $("form#cocktail").submit(function(event) {
    event.preventDefault();
    $("#result").show();
    $("#cost").show();
    $("input:checkbox[name=garnish]:checked").each(function() {
      var garnishChoice = $(this).val();
      $('#result').append(garnishChoice + "<br>");
    });
  });
});
