let home = document.getElementById('home');
let explore = document.getElementById('explore');
let now = document.getElementById('now');
let future = document.getElementById('future');
let coffee = document.getElementById('first');
let coffeeReplace = document.getElementById('second');
let coffeeEmpty = document.getElementById('third');

let homeLink = document.getElementById('home-link');
let exploreLink = document.getElementById('explore-link');
let nowLink = document.getElementById('now-link');
let futureLink = document.getElementById('future-link');


homeLink.onclick = function(event) {
    event.preventDefault();

    coffee.style.display = 'none';
    coffeeReplace.style.display = 'none';
    coffeeEmpty.style.display = 'none';
    home.classList.add('hidden');
    explore.classList.add('hidden');
    now.classList.add('hidden');
    future.classList.add('hidden');

    home.classList.remove('hidden');
};


exploreLink.onclick = function(event) {
    event.preventDefault();

    coffee.style.display = 'none';
    coffeeReplace.style.display = 'none';
    coffeeEmpty.style.display = 'none';
    home.classList.add('hidden');
    explore.classList.add('hidden');
    now.classList.add('hidden');
    future.classList.add('hidden');

    explore.classList.remove('hidden');
};


nowLink.onclick = function(event) {
    event.preventDefault();

    coffee.style.display = 'none';
    coffeeReplace.style.display = 'none';
    coffeeEmpty.style.display = 'none';
    home.classList.add('hidden');
    explore.classList.add('hidden');
    now.classList.add('hidden');
    future.classList.add('hidden');

    now.classList.remove('hidden');
};


futureLink.onclick = function(event) {
    event.preventDefault();

    coffee.style.display = 'none';
    coffeeReplace.style.display = 'none';
    coffeeEmpty.style.display = 'none';
    home.classList.add('hidden');
    explore.classList.add('hidden');
    now.classList.add('hidden');
    future.classList.add('hidden');
    coffee.style.display = 'none';

    future.classList.remove('hidden');
};

coffee.onclick = function(event) {
    event.preventDefault();

    coffee.style.display = 'none';
    coffeeReplace.style.display = 'flex';
};

coffeeReplace.onclick = function(event) {
    event.preventDefault();

    coffeeReplace.style.display = 'none';
    coffeeEmpty.style.display = 'flex';
};

coffeeEmpty.onclick = function(event) {
    event.preventDefault();

    coffeeEmpty.style.display = 'none';
    coffee.style.display = 'flex';
};