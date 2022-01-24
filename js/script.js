"use strict";

/* let namber = 4;
const persone = "Alex";

const bool = false;
const obj = {
  name: "John",
  age: 25,
  isMarried: false,
};

let arr = ["plum.png", "orange.jpg", 6, "apple.bmp", {}, []];
console.log(arr[1]);

const result = confirm("Are you here?");

const category = "toys";

const user = "Ivan";
alert(`привет, ${user}`);

let incr = 10,
  decr = 10;
incr++;
decr--;

console.log(incr);
console.log(decr);
 */

const namberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
  count: namberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один из последних просмотренных фильмов?", ""),
  b = +prompt("На сколько очените его?", ""),
  c = prompt("Один из последних просмотренных фильмов?", ""),
  d = +prompt("На сколько очените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
