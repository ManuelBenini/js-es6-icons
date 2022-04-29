const indiceEsadecimali = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
const numeriRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const arrayanimalsColor = [];
const arrayVegetablesColor = [];
const arrayUsersColor = [];
const animalsColorString = creaEsadecimale(arrayanimalsColor);
const vegetablesColor = creaEsadecimale(arrayVegetablesColor);
const usersColor = creaEsadecimale(arrayUsersColor);

const arrayAllElements = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColorString
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColorString
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColorString
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColorString
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColorString
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColorString
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColorString
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: animalsColorString
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

const arrayTypes = []; typePush();
const arrayAnimals = arrayAllElements.filter(element => (element.type == 'animal'))
const arrayVegetables = arrayAllElements.filter(element => (element.type == 'vegetable'))
const arrayUsers = arrayAllElements.filter(element => (element.type == 'user'))


console.log('Tutti i tipi', arrayAllElements);
console.log('tipologie', arrayTypes);
console.log('Animali', arrayAnimals);
console.log('Vegetali', arrayVegetables);
console.log('Utenti', arrayUsers);

//stampa di default che si vede all'apertura della pagina
imageStamp(arrayAllElements);
optionsStamp();

//bottone
  const selectBtn = document.getElementById('type-choice');
  selectBtn.addEventListener('change', function(){
    let arrayScelto;
    switch (this.value) {

      case 'animal': 
      arrayScelto = arrayAnimals;
      break;

      case 'vegetable':
      arrayScelto = arrayVegetables;
      break;

      case 'user':
      arrayScelto = arrayUsers;
      break;
    
      default:
      arrayScelto = arrayAllElements;
      break;
    }
      
      imageStamp(arrayScelto);
  });
//

  /*  Alternativa, 4 bottoni invece di un singolo change con switch
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
  */


optionAdder();

function typePush() {
	for(let i = 0; i < arrayAllElements.length; i++){
		if(!arrayTypes.includes(arrayAllElements[i].type.toLowerCase())){
			arrayTypes.push(arrayAllElements[i].type.toLowerCase())
		}
	}
}

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

function optionsStamp() {
  const typeChoice = document.getElementById('type-choice');
  typeChoice.innerHTML = '';

  typeChoice.innerHTML = 
  `
    <option value="all" id="all" selected>All</option>
  `;
}

function optionAdder() {

	arrayTypes.forEach(element => {
		selectBtn.innerHTML += 
	`
	<option value="${element}" id="${element}">${element}</option>
	`  
	});
    
}

function creaEsadecimale(array) {
  for(let i = 0; i < 6; i++){
    array.push(indiceEsadecimali[numeriRandom(0, indiceEsadecimali.length - 1)]);
  }
  return array.join('');
}

console.log('colore esadecimale animali', animalsColorString);
console.log('colore esadecimale vegetali', vegetablesColor);
console.log('colore esadecimale utenti', usersColor);