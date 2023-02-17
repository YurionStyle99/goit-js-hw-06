const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients')
console.log(list)

for(const ingredient of ingredients){
const createElLI= document.createElement('li');
createElLI.classList.add('.item')
createElLI.textContent = ingredient;
list.appendChild(createElLI)
}