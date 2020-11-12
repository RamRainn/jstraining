"use strict";
// const result = confirm("Ты тут ?");

// console.log(result);

// const answer = prompt("Вам есть 18?", "");
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('Как ваше имя? ', '')
// answers[1] = prompt('Как ваше фамилия? ', '')
// answers[2] = prompt('Сколько вам лет? ', '')

// console.log(typeof(answers));
// console.log(typeof(null));

// const user = "Ivan";

// alert(`привет, ${user}`);

// console.log('arr' + " - object");
// console.log(4 + " - object");

let incr = 10,
    decr = 10;

// ++incr;
// --decr;


// console.log(incr);
// console.log(decr);

// console.log(5%2);

// console.log(2*4 === '8');


// const isCheched = true,
//       isClose = true;

// console.log(isCheched || isClose);

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов? ', ''),
      b = prompt('На сколько оцените его? ', ''),
      c = prompt('Один из последних просмотренных фильмов? ', ''),
      d = prompt('На сколько оцените его? ', '');


personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);