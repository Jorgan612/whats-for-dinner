//Pseudocode:
//NOTE: Will need an event.preventDefault() method to prevent the
// form from trying to send the user selection somewhere
// for radio button:
  //How do you make it to where only one of the buttons can be selected?
  //Will there be a toggle option to reselect a new choice option?
// Need a variable to grab html elements
// EVENT LISTENERS for LET'S COOK! button
//FUNCTIONS: what will the button do?
    // show random recipe based on category selected
      // ARRAYs: needed to store recipe names according to category
var letsCookBttn = document.querySelector('.lets-cook');
var sidesOption = document.getElementById('side');
var mainOption = document.getElementById('main')
var formResultsView = document.querySelector('.form-result');
var cookpotImg = document.querySelector('.icon');
var viewFormResult = document.querySelector('.view-form-result');

letsCookBttn.addEventListener('click', getRandomRecipe);


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomRecipe() {
  event.preventDefault();
  hideCookpot();
  unhideRecipe();
  if (sidesOption.checked === true) {
    viewFormResult.innerText = `You should make: ${sides[getRandomIndex(sides)]}!`
    // console.log(sides[getRandomIndex(sides)]);
    // return `${sides[getRandomIndex(sides)]}!`;
 //  } else if ()
 // mains[getRandomIndex(meals)],
 // desserts[getRandomIndex(desserts)]
  } // finish else if statesments SUNDAY!
}

function showRandomOption() {

}
function hideCookpot() {
  cookpotImg.classList.add('hidden');
}
function unhideRecipe() {
  viewFormResult.classList.remove('hidden');
}

var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
]

var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
]

var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
]
