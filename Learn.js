

  const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  const personalMovioDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
  };


  const a = prompt('Один из последних просмоиренных фильмомв?', ''),
        b = prompt('На сколько оцентине его?', ''),
        c = prompt('Один из последних просмоиренных фильмомв?', ''),
        d = prompt('На сколько оцентине его?', '');

personalMovioDB.movies[a] = b;
personalMovioDB.movies[c] = d;

console.log(personalMovioDB);