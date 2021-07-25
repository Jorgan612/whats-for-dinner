
var letsCookBttn = document.querySelector('.lets-cook');
var sidesOption = document.getElementById('side');
var mainOption = document.getElementById('main');
var dessertOption = document.getElementById('dessert');
var formResultsView = document.querySelector('.form-result');
var cookpotImg = document.querySelector('.icon');
var viewFormResult = document.querySelector('.view-form-result');
var clearBttn = document.querySelector('.clear-bttn');

letsCookBttn.addEventListener('click', getRandomRecipe);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomRecipe() {
  event.preventDefault();
  cookpotImg.classList.add('hidden');
  viewFormResult.classList.remove('hidden');
  clearBttn.classList.remove('hidden');
  if (sidesOption.checked === true) {
    viewFormResult.innerText = `You should make: ${sides[getRandomIndex(sides)]}!`
  } else if (mainOption.checked === true) {
      viewFormResult.innerText = `You should make: ${mains[getRandomIndex(mains)]}!`
  } else if (dessertOption.checked === true) {
      viewFormResult.innerText = `You should make: ${desserts[getRandomIndex(desserts)]}!`
  }
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
