const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  //going through recipes array to compare with the check ingredient to see if both bakery has the ingredient
  for(recipe of recipes){
    if(checkIngredient(bakeryA,recipe.ingredients) && (checkIngredient(bakeryB,recipe.ingredients))){
      return recipe.name;
    }
  }
}

//function to check ingredient if the bakery ingredient is included inside ingredient inside the recipe book
function checkIngredient(bakery,ingredients){
  for(ingredient of ingredients){
    if(bakery.includes(ingredient)){
      return true;
    }
  }
  return false;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));