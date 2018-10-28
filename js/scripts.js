//Biz logic
function Cocktail(liquor, submitteduserGarnishes) {
  this.liquor = liquor;
  this.garnishes = submitteduserGarnishes;
  this.price = 0.00;
};

Cocktail.prototype.drinkCost = function() {
      if (this.liquor === "Moonshine") {
        newCocktail.price += 10.00;
        console.log("part 2 of biz logic is working!")
      }
      if (this.liquor === "Whiskey") {
        newCocktail.price += 9.00;
      }
      if (this.liquor === "Gin") {
        newCocktail.price += 8.00;
      }
      if (this.garnishes === "Bitters" || "Lime Slices" || "Cinnamon Sticks" || "Mint Sprigs" || "Simple Syrup") {
        newCocktail.price += 3.00;
      // }
      // if (this.userGarnishes.length > 0) {
      //     this.price += (this.userGarnishes.length) * 3.00;
      //     console.log("This is the price so far after toppings: " + this.price)
      } else {
        alert("You messed up the webpage!");
      }
      console.log("total price is: " + newCocktail.price)

    return newCocktail.price;
  };

//UI logic
$(document).ready(function() {
  $("form#cocktail").submit(function(event) {
    event.preventDefault();
    debugger;
    var submittedLiquor = $("#liquor").val();
    var mixer = $("#mixer").val();
    //  var submitteduserGarnishes captures the values of each garnish or extra chosen by the user, to be displayed to them in the future.
    var submitteduserGarnishes = [];
    $("input:checkbox[name=garnish]:checked").each(function() {
      var garnishChoice = $(this).val();
      submitteduserGarnishes.push(garnishChoice);

    // this calls on the back end logic
    var newCocktail = "";
    newCocktail = new Cocktail(submittedLiquor, submitteduserGarnishes);
    var orderedCocktail = [];
    //Cocktail.drinkCost(submittedLiquor);

    console.log("This is the drink order: " + submittedLiquor + ", " + mixer + ", " + submitteduserGarnishes)

    //newCocktail1.liquor = newCocktail1.drinkCost;
    //console.log ("price: " + newCocktail1.price)
    $("#result").show();
    });
  });
});
