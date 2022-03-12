//"use strict";

// // // const numberOfFilms = +prompt ("Сколько фильмов вы посмотрели?","");

// // // const personalMovieDB = {
// // //     count: numberOfFilms,
// // //     movies: {},
// // //     actors: {},
// // //     genres: [],
// // //     privat: false
// // // };


// // // for (let i = 0; i < 2; i++ ) {
// // //         a = prompt("Один из последних просмотренных фильмов?", "");
// // //         b = +prompt("На сколько оцените его?", "");
// // //         if (a != null && b != null && a != "" && b != "" && a.lenth < 50) {
// // //             personalMovieDB.movies[a] = b
// // //         } else  {alert ("Строка не может быть пустая",);
// // //         i--;
// // //     }

// // //         }
    
// // // if (personalMovieDB.count < 10){
// // //     alert ("Просмотренно довольно мало фильмов!");
// // // } else if (personalMovieDB.count >=10 && personalMovieDB.count < 30) {
// // //     alert ("Вы классический зритель");
// // // }   else if (personalMovieDB.count >30) {
// // //     alert ("Вы киноман"); 
// // // }   else {alert ("Произошла ошибка");
// // // }   



// // // if (4 == 9){
// // //     console.log("Ok!")
// // // } else {
// // //     console.log ("Error");
// // // }


// // // // // if (num<49) {
// // // // //     console.log ("Error");
// // // // // } else if (num>100) {
// // // // //     console.log ("Много");
// // // // // } else {
// // // // //     console.log("Правильно");
// // // // // }

// // // // // (num ===60) ? console.log("Так точно сэр") : console.log ("Не правильно");

// // // // const num = 50;

// // // // switch (num) {
// // // //     case 49:
// // // //         console.log ("Не верно!");
// // // //         break;
// // // //     case 51:
// // // //         console.log ("Именно");
// // // //         break;
// // // //     default:
// // // //         console.log ("Не в этот раз!");
// // // // }


// // // // while (num < 55) {
// // // //     console.log(num);
// // // //     num++;
// // // // }

// // // do {
// // //     console.log(num);
// // //     num++;
// // // }
// // // while (num <55);

// // // let num = 50;

// // // for (let i = 1; i < 10; i++) {
// // //     if (i === 6) {
// // //         //break;
// // //         continue;
// // //     }   
// // //     console.log(i);
// // // }


// // // function showFirstMessage() {
// // //     console.log ("Hello World");
// // // }
// // // showFirstMessage();

// // // function showFirstMessage(text) {
// // //         console.log (text);
// // //     }
// // //     showFirstMessage("Hello World");

// // //     function calc(a, b) {
// // //         return (a + b); 
// // //     }
// // //     console.log (calc(4,3));
// // //     console.log (calc(5,6));
// // //     console.log (calc(10,6));

// // let num = 10;

// //     function ret() {
// //         let num = 50;
// //         return num;
// //     }
    
// // const anotherNum = ret();
// // console.log (anotherNum);

// // const logger = function () {
// //     console.log ("Hello");
// // };

// // logger();

// // const calc = (a, b) => a + b;
 

// const str = "test";
// // const arr = [1, 2, 4];

// console.log (str.toUpperCase());
// console.log (str);
 
// const fruit = "Some fruit";

// console.log(fruit.indexOf("q"));

// const logg = "Hi how is going?";


// // console.log (logg.substring(10, 15));
// // console.log (logg.substr (10, 1));

// const num = 12.2;
// console.log (Math.round(num));

// const test = "12.2px";
// // console.log (parseInt(test));
// console.log (parseFloat(test));

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


 function rememberMyFilms() {
     for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?", ""),
              b = prompt("На сколько оцените его?", "");
         if (a != null && b != null && a != "" && b != "" && a.length < 50) {
             personalMovieDB.movies[a] = b;
            
         } else {
             alert("Строка не может быть пустая", );
             i--;
         }

     }
    
}

// rememberMyFilms();


function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert("Просмотренно довольно мало фильмов!");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
    
}
// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden){
    console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

// function writeYouGenres () {
//   const a =  prompt ("Ваш любимый жанр под номером 1"),
//         b =  prompt ("Ваш любимый жанр под номером 2"),
//         c =  prompt ("Ваш любимый жанр под номером 3");
//    personalMovieDB.genres [a] = b = c;

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres [i-1] = prompt(`Ваш любимый жанр под номером ${i}`);;
            }
        }


                
writeYourGenres();