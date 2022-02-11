"use strict";

//переменные и обьекты

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

//задание с условиями и циклами

/* const namberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

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

for (let i = 0; i < 2; i++) {
  const a = prompt("Один из последних просмотренных фильмов?", ""),
    b = prompt("На сколько очените его?", "");

  if (a != null && b != null && a != "" && b != "" && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log("Просмотрено мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  console.log("Вы киноман");
} else {
  console.log("error");
}
console.log(personalMovieDB); */

//условия

/* if (4 == 9) {
  console.log("Ok!");
} else {
  console.log("Error");
}

const num = 50;
if (num < 49) {
    console.log('error');
} else if (num > 100) {
console.log('Много');
} else {
    console.log('Ok');
}
(num === 50) ? console.log('Ok') : console.log('error');

const num = 50;
switch (num) {
    case 49:
        console.log('неверно');
        break;
    case 100:
        console.log('неверно');
        break;
    case 50:
        console.log('верно');
        break;
    default:
        console.log('не в этот раз');
        break;
}
 */
//циклы

/* let num = 50;
while (num > 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num > 55);

for (let i = 1; i < 8; i++) {
if (i === 6) {
    break; //прерывает
    continue; //пропускает
}

    console.log(i);
}
 */
//функции

/* let num = 20;
  //declaration
function showFirstMessage(text) {
  console.log(text);
  num = 10;
}

showFirstMessage("Hello World!");
console.log(num);

function calc(a, b) {
  return(a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

//expression
const logger = function() {
console.log("hello");
};
logger(); */

//стрелочная

/* const calc = (a, b) => {return a + b}; */

//свойства строк и чисел

/* const str = "test";
const arr = [1, 2, 3];
console.log(str.length);
console.log(arr.length); */

//методы строк

/* const str = "test";
console.log(str.toUpperCase());
console.log(str.toLowerCase());  

const fruit = "some fruit";
console.log(fruit.indexOf("fruit"));

const logg = "Hello world"
console.log(logg.slice(0, 6));
console.log(logg.substring(6, 11);
console.log(logg.substr(6, 5)); */

//методы чисел

/* const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test)); */

//задание, использование функций

let namberOfFilms;

function start() {
  namberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

  while (namberOfFilms == "" || namberOfFilms == null || isNaN(namberOfFilms)) {
    namberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

//start();

const personalMovieDB = {
  count: namberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько очените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

//rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("error");
  }
}

detectPersonalLevel();

function showMyDB(hiden) {
  if (!hiden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGeners() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGeners();
