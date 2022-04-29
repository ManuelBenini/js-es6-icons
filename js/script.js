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

const animals = fontIcons.filter(element => (element.type == 'animal'))
const vegetables = fontIcons.filter(element => (element.type == 'vegetable'))
const users = fontIcons.filter(element => (element.type == 'user'))

console.log('Tutti i tipi', fontIcons);
console.log('Animali', animals);
console.log('Vegetali', vegetables);
console.log('Utenti', users);

//stampa di default che si vede all'apertura della pagina
outputStamp(fontIcons);

//bottoni
  const allOptionBtn = document.getElementById('all');
  allOptionBtn.addEventListener('click', function(){
    outputStamp(fontIcons);
  });

  const animalOptionBtn = document.getElementById('animal');
  animalOptionBtn.addEventListener('click', function(){
    outputStamp(animals);
  });

  const vegetableOptionBtn = document.getElementById('vegetable');
  vegetableOptionBtn.addEventListener('click', function(){
    outputStamp(vegetables);
  });

  const userOptionBtn = document.getElementById('user');
  userOptionBtn.addEventListener('click', function(){
    outputStamp(users);
  });
//


function outputStamp(array) {
  const row = document.querySelector('.row');
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


function creaEsadecimale(array) {
  for(let i = 0; i < 6; i++){
    array.push(indiceEsadecimali[numeriRandom(0, indiceEsadecimali.length - 1)]);
  }
  return array.join('');
}

console.log('colore esadecimale animali', animalsColor);
console.log('colore esadecimale vegetali', vegetablesColor);
console.log('colore esadecimale utenti', usersColor);