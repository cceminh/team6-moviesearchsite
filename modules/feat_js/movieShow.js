import { goToMovieDetail } from "../feat_js/goto_movie_detail.js";
//메인//
export const generateMovieCards = async () => {
  const movies = await fetchMovieData();

  const cardList = document.querySelector("#card_list");
  cardList.innerHTML = movies
    .map(
      (movie) =>
        `<a id="a_movie_card" href="./movie_detail_page/?${movie.id}.html"><div class="movie_card" id=${movie.id}>
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
              <h3 id="title" class="movie_title">${movie.title}</h3>
              <p id="overview">${movie.overview}</p>
              <p id="rating">평점:${movie.vote_average}</p>
              </div></a>`
    )
    .join("");
};

export async function fetchMovieData() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NThhODc2ZTY5NDA4NWY4YTA1MmQyNjc5MTRhY2RlMiIsInN1YiI6IjYxYzNjZjY5MzdiM2E5MDBjMzQ2YzYyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPkre3BdMQtujbkqtPmW7TC_022A-ZR2M_ZShzd_kDU",
    },
  };
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&include_adult=false",
    options
  );
  const data = await response.json();
  return data.results;
}

//서치결과제공//
export const searchMovieCardss = async () => {
  const searches = await fetchMovieDatas();

  const searchList = document.querySelector("#search_list");
  searchList.innerHTML = searches
    .map(
      (movie) =>
        `<a id="a_movie_card" href="./movie_detail_page/?${movie.id}.html"><div class="search_card" id=${movie.id}>
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
              <h3 id="title" class="search_title">${movie.title}</h3>
              <p id="overview">${movie.overview}</p>
              <p id="rating">평점:${movie.vote_average}</p>
              </div></a>`
    )
    .join("");
};

export async function fetchMovieDatas() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NThhODc2ZTY5NDA4NWY4YTA1MmQyNjc5MTRhY2RlMiIsInN1YiI6IjYxYzNjZjY5MzdiM2E5MDBjMzQ2YzYyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pPkre3BdMQtujbkqtPmW7TC_022A-ZR2M_ZShzd_kDU",
    },
  };
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&include_adult=false",
    options
  );
  const data = await response.json();
  return data.results;
}
