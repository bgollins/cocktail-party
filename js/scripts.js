//Biz logic

//object
function Cocktail(submittedliquor, submitteduserGarnishes) {
  this.liquor = submittedliquor;
  this.garnishes = submitteduserGarnishes;
  this.price = 0.00;

// prototype! with method 'drinkCost'
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
      // the logic for garnishes (above) should be more complicated, but I was just trying to get SOMETHING to work... here's a draft of the more complicated version:
      // if (this.submitteduserGarnishes.length > 0) {
      //     this.price += (this.submitteduserGarnishes.length) * 3.00;
      //     console.log("This is the price after garnishes: " + this.price)
      } else {
        alert("You messed up the webpage!");
      }
      console.log("total price is: " + newCocktail.price)

    return newCocktail.price;
  };
};

//UI logic
$(document).ready(function() {
  $("form#cocktail").submit(function(event) {
    event.preventDefault();
    var submittedLiquor = $("#liquor").val();
    var mixer = $("#mixer").val();
    //  var submitteduserGarnishes captures the values of each garnish or extra chosen by the user, to be displayed to them in the future.
    var submitteduserGarnishes = [];
    $("input:checkbox[name=garnish]:checked").each(function() {
      var garnishChoice = $(this).val();
      submitteduserGarnishes.push(garnishChoice);

    // constructor!
    var newCocktail = new Cocktail(submittedLiquor, submitteduserGarnishes);

    $("#result").show();
    $("#result").text("This is the drink order: " + submittedLiquor + ", " + mixer + ", " + submitteduserGarnishes);
    });
  });
});
