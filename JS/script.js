"use strict";
//1
const numberOfFilms = +prompt ("Сколько фильмов вы посмотрели?","");


//2
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//3
const a = prompt ("Один из последних просмотренных фильмов?",""),
    b = +prompt ("На сколько оцените его?", "");
    
personalMovieDB.movies [a] = b; 

console.log(personalMovieDB);

