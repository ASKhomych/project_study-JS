'use strict';

  const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  const personalMovioDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };

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

if (personalMovioDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovioDB.count >= 10 && personalMovioDB.count < 30){
     console.log("Вы классический зритель");
} else if (personalMovioDB >= 30) {
    console.log("Вы киноман");
} else {
     console.log("Произошла ошибка");
}


console.log(personalMovioDB);



