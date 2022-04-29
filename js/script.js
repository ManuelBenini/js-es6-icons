const fontIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
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
          <i class="${family} ${prefix}${name} ${type}"></i>
          <span id="name">${name}</span>
        </div>
      </div>
    `
  });
  
}