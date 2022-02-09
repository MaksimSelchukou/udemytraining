/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

//1.Задание

let promos = document.querySelectorAll('div.promo__adv img');
console.log(promos)

// for (let elem of promos) {
//     elem.remove()
// }
promos.forEach(f => {
    f.remove()
})

// 2 task
let genre = document.querySelector('.promo__genre');
// console.log(genre)
genre.innerHTML = "Драма";
// console.log(genre)

//task 3

let main = document.querySelector('.promo__bg');
console.log(main)
main.style.backgroundImage = "url('img/bg.jpg')";




//task 4

let sortFilms = movieDB.movies.sort()
console.log(sortFilms)

let films = document.querySelector('.promo__interactive-list');
console.log(films);
films.innerHTML = '';
sortFilms.forEach((film, ind) => {
    films.innerHTML += `
    <li class="promo__interactive-item">${ind+1}.${film}
                            <div class="delete"></div>
                        </li>`

})