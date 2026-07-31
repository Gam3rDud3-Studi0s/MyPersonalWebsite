let home = document.getElementById('home');
let explore = document.getElementById('explore');
let now = document.getElementById('now');
let future = document.getElementById('future');

let homeLink = document.getElementById('home-link');
let exploreLink = document.getElementById('explore-link');
let nowLink = document.getElementById('now-link');
let futureLink = document.getElementById('future-link');


homeLink.onclick = function(event) {
    event.preventDefault();

    home.classList.add('hidden');
    explore.classList.add('hidden');
    now.classList.add('hidden');
    future.classList.add('hidden');

    home.classList.remove('hidden');
};


exploreLink.onclick = function(event) {
    event.preventDefault();

    home.classList.add('hidden');
    explore.classList.add('hidden');
    now.classList.add('hidden');
    future.classList.add('hidden');

    explore.classList.remove('hidden');
};


nowLink.onclick = function(event) {
    event.preventDefault();

    home.classList.add('hidden');
    explore.classList.add('hidden');
    now.classList.add('hidden');
    future.classList.add('hidden');

    now.classList.remove('hidden');
};


futureLink.onclick = function(event) {
    event.preventDefault();

    home.classList.add('hidden');
    explore.classList.add('hidden');
    now.classList.add('hidden');
    future.classList.add('hidden');

    future.classList.remove('hidden');
};