
import { combinedApiArray } from "./combinedApi.js"; // 3개의 api를 담은 변수.

// api 3개 담은 배열을 만들어서 가져왔어요.
// 그래서 async, fetch가 필요없어져서 지워버렸습니다. // 확인했습니다.

/* 상세정보 영화카드 만들기 */

export const generateMovieDetailCards = () => {
  // 지운 부분//
  const detailCardList = document.querySelector("#detail_card_list");
  const url = window.location.href;
  console.log(url);
  const searchParams = new URL(url).searchParams;
  const idOnAddress = searchParams.get("id");
  console.log("결과: " + idOnAddress); //  ${movie.id} 에 해당하는 number

  const foundClickedMovie = combinedApiArray.find(({ id }) => id == idOnAddress); 
  console.log(foundClickedMovie); // 클릭된 영화묶음 객체

  const clickedMovieId = foundClickedMovie.id;
  const clikedPoster = foundClickedMovie.poster_path;
  const clickedTitle = foundClickedMovie.title;
  const clickedOverview = foundClickedMovie.overview;
  const clickedReview = foundClickedMovie.vote_average;
  const clickedReleaseDate = foundClickedMovie.release_date;

  // console.log(clickedMovieId);

  detailCardList.innerHTML = `<div id=${clickedMovieId}>
              <img src="https://image.tmdb.org/t/p/w500${clikedPoster}"/>
              <h3>${clickedTitle}</h3>
              <p>Overview : ${clickedOverview}</p>
              <p>Reaslse Date : ${clickedReleaseDate}</p>
              <p>Rating : ${clickedReview}</p>
            </div>`;
};
