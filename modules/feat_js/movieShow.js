import { goToMovieDetail } from "../feat_js/goto_movie_detail.js";

export const generateMovieCards = async (movie_list) => {
  const movies = await fetchMovieData(movie_list);

  const cardList = document.querySelector("#" + movie_list + "_card");
  cardList.innerHTML = movies
    .map(
      (movie) =>
        `<a id="a_movie_card" href="./movie_detail_page/?${movie.id}.html">
          <div class="movie_card" id=${movie.id}>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h3 id="title" class="movie_title">${movie.title}</h3>
         </div>
        </a>`
    )
    .join("");

  // cardList.addEventListener("click", handleClickCard);

  // // 이벤트 위임: 하위요소에서 발생한 이벤트를 상위요소에서 처리하도록 해줍니다.
  // function handleClickCard({ target }) {
  //   // 카드 외 영역 클릭 시 무시
  //   if (target === cardList) return;

  //   if (target.matches(".movie-card")) {
  //     goToMovieDetail();
  //   } else {
  //     // 카드의 자식 태그 (img, h3, p) 클릭 시 부모의= id로 접근
  //     goToMovieDetail();
  //   }
  // }
};

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
