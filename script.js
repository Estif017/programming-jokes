const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');
const punchlineBtn = document.getElementById('punchlineBtn');
const newJokeBtn = document.getElementById('newJokeBtn');
let jokeArray = [];

// 1. display a first line of a joke in the setup container
// 2. when we click the punchlineBtn the punchline dive will display with the jocke
// # we fetch the joke api first
function displayPunchLine() {
	punchline.style.display = 'block';
	punchline.classList.add('bubble');
	punchline.innerHTML = jokeArray[0].punchline;
}
function getNewJoke() {
	punchline.style.display = 'none';
	getJokes();
}
function displayJokes() {
	setup.innerHTML = jokeArray[0].setup;
	punchlineBtn.classList.remove('hidden');
	punchlineBtn.addEventListener('click', displayPunchLine);
}
async function getJokes() {
	try {
		const response = await fetch(
			'https://official-joke-api.appspot.com/jokes/programming/random'
		);
		jokeArray = await response.json();
		console.log(jokeArray);
		displayJokes();
	} catch (error) {
		console.log(error);
	}
}

newJokeBtn.addEventListener('click', getNewJoke);
getJokes();
