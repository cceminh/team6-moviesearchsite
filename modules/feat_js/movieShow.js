import { unique } from "./combinedApi.js";
export const movie_arr = [];

export const generateMovieCards = async (movie_list) => {
  const movies = await fetchMovieData(movie_list);
  movie_arr.push(...movies);
  const cardList = document.querySelector("#" + movie_list + "_card");
  cardList.innerHTML = movies
    .map(
      (movie) =>
        `<a id="a_movie_card" href="./movie_detail_page.html?id=${movie.id}">
          <div class="movie_card" id=${movie.id}>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3 id="title" class="movie_title">${movie.title}</h3>
         </div>
        </a>`
    )
    .join("");
};

export const searchResultCard = () => {
  const cardLists = document.querySelector("#card");
  cardLists.innerHTML += unique
    .map(
      (movie) =>
        `<a id="a_movie_card" href="./movie_detail_page.html?id=${movie.id}"><div class="search_card" id=${movie.id}>
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
              <h3 id="title" class="search_title">${movie.title}</h3>
              </div></a>`
    )
    .join("");
};

// import { combinedApiArray } from "./combinedApi.js";

// export const searchResultCard = async () => {
//   const movie = combinedApiArray;

//   const cardLists = document.querySelector("#card");
//   cardLists.innerHTML += movie
//     .map(
//       (movie) =>
//         `<a id="a_movie_card" href="./movie_detail_page.html?id=${movie.id}"><div class="search_card" id=${movie.id}>
//               <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
//               <h3 id="title" class="search_title">${movie.title}</h3>
//               </div></a>`
//     )
//     .join("");
// };

export async function fetchMovieData(movie_list) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NThhODc2ZTY5NDA4NWY4YTA1MmQyNjc5MTRhY2RlMiIsInN1YiI6IjYxYzNjZjY5MzdiM2E5MDBjMzQ2YzYyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPkre3BdMQtujbkqtPmW7TC_022A-ZR2M_ZShzd_kDU",
    },
  };
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/" +
      movie_list +
      "?language=en-US&page=1&include_adult=false",
    options
  );
  const data = await response.json();
  return data.results;
}
