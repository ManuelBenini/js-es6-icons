const indiceEsadecimali = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
const numeriRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const arrayAnimalsColor = [];
const arrayVegetablesColor = [];
const arrayUsersColor = [];
const animalsColor = creaEsadecimale(arrayAnimalsColor);
const vegetablesColor = creaEsadecimale(arrayVegetablesColor);
const usersColor = creaEsadecimale(arrayUsersColor);

const fontIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColor
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColor
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColor
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColor
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColor
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColor
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColor
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColor
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: vegetablesColor
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: vegetablesColor
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: vegetablesColor
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: vegetablesColor
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: usersColor
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: usersColor
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: usersColor
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: usersColor
	}
];

const arrayAnimals = fontIcons.filter(element => (element.type == 'animal'))
const arrayVegetables = fontIcons.filter(element => (element.type == 'vegetable'))
const arrayUsers = fontIcons.filter(element => (element.type == 'user'))

console.log('Tutti i tipi', fontIcons);
console.log('Animali', arrayAnimals);
console.log('Vegetali', arrayVegetables);
console.log('Utenti', arrayUsers);

//stampa di default che si vede all'apertura della pagina
imageStamp(fontIcons);
selectStamp();

//bottoni
  const allOptionBtn = document.getElementById('all');
  allOptionBtn.addEventListener('click', function(){
    imageStamp(fontIcons);
  });

  const animalOptionBtn = document.getElementById('animal');
  animalOptionBtn.addEventListener('click', function(){
    imageStamp(arrayAnimals);
  });

  const vegetableOptionBtn = document.getElementById('vegetable');
  vegetableOptionBtn.addEventListener('click', function(){
    imageStamp(arrayVegetables);
  });

  const userOptionBtn = document.getElementById('user');
  userOptionBtn.addEventListener('click', function(){
    imageStamp(arrayUsers);
  });
//

optionAdder();


function imageStamp(array) {
  const row = document.querySelector('.row');
  //reset
  row.innerHTML = '';
  

  array.forEach(element => {
    const {name, prefix, type, family, color} = element;
    row.innerHTML +=  
    `
      <div class="col mb-5">
        <div>
          <i class="${family} ${prefix}${name} ${type}" style="color: #${color};"></i>
          <span id="name">${name.toUpperCase()}</span>
        </div>
      </div>
    `
  });
  
}

function selectStamp() {
  const typeChoice = document.getElementById('type-choice');
  typeChoice.innerHTML = '';

  typeChoice.innerHTML = 
  `
    <option value="All" id="all" selected>All</option>
    <option value="Animal" id="animal">animal</option>
    <option value="Vegetable" id="vegetable">vegetable</option>
    <option value="User" id="user">user</option>
  `;
}

function optionAdder() {
  const typeChoice = document.getElementById('type-choice');
  
  fontIcons.forEach(element => {

    if(element.type != animalOptionBtn.innerHTML && element.type != vegetableOptionBtn.innerHTML && element.type != userOptionBtn.innerHTML){
    typeChoice.innerHTML += 
    `
    <option value="${element.type}" id="${element.type}">${element.type}</option>
    `  
    }
    
  });
}


function creaEsadecimale(array) {
  for(let i = 0; i < 6; i++){
    array.push(indiceEsadecimali[numeriRandom(0, indiceEsadecimali.length - 1)]);
  }
  return array.join('');
}

console.log('colore esadecimale animali', animalsColor);
console.log('colore esadecimale vegetali', vegetablesColor);
console.log('colore esadecimale utenti', usersColor);