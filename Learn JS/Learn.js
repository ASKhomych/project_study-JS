'use strict';

  let numberOfFilms;

  function start(){
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
      while (numberOfFilms =='' || numberOfFilms == null || isNaN(numberOfFilms)){
           numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
         }
 
        }

        start();



  const personalMovioDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };


function rememberMyFilms(){
  for (let i =0; i < 2; i++ ){
    const a = prompt('Один из последних просмоиренных фильмомв?', ''),
          b = prompt('На сколько оцентине его?', '');

    if (a != null && b != null && a != '' && b != '' && a.lengh <50) {
        personalMovioDB.movies[a] = b;
        console.log('done');

    } else {
         console.log('error');
         i--;
    }     

}

rememberMyFilms();



  function detectPersonalLevel(){
    if (personalMovioDB.count < 10){
      console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovioDB.count >= 10 && personalMovioDB.count < 30){
       console.log("Вы классический зритель");
  } else if (personalMovioDB >= 30) {
      console.log("Вы киноман");
  } else {
       console.log("Произошла ошибка");
  }

  detectPersonalLevel();

  function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovioDB);
    }
  }

  showMyDB(personalMovioDB.privat);

  function writeYourGenres() {
     for (let i = 1; i <=3; i++) {
        const genre = prompt(`Ваш любисый жанр под номером ${i}`);
        personalMovioDB.genres[i - 1] = genre;
 
     }
  }
  
  writeYourGenres();





