// TMDB Movies Detail API 
// https://developer.themoviedb.org/reference/movie-details
import {fetchMovieData} from "../feat_js/movieShow.js";
import {generateMovieCards} from "../feat_js/movieShow.js";


// -------------- 기존 API 다시 불러오기 ---------------- //


  export const generateMovieDetailCards = async (movie_list) => {
    const movie_details = await fetchMovieData(movie_list);
    const detailCardList = document.querySelector("#detail_card_list");
    const url = window.location.href;
    // console.log(url);
    const searchParams = new URL(url).searchParams;
    const idOnAddress = searchParams.get('id'); 
    console.log("결과: " + idOnAddress); //  ${movie.id} 에 해당하는 number
    
    const foundClickedMovie = movie_details.find(({id}) => id == idOnAddress); // 객체구조분해 할당
    console.log(foundClickedMovie); // 클릭된 영화묶음 객체
    
    const clickedMovieId = foundClickedMovie.id;
    const clikedPoster = foundClickedMovie.poster_path;
    const clickedTitle = foundClickedMovie.title;
    const clickedOverview = foundClickedMovie.overview;
    const clickedReview = foundClickedMovie.vote_average;

    // console.log(clickedMovieId);

    detailCardList.innerHTML = 
    `<div id=${clickedMovieId}>
              <img src="https://image.tmdb.org/t/p/w500${clikedPoster}"/>
              <h3>${clickedTitle}</h3>
              <p>${clickedOverview}</p>
              <p>${clickedReview}</p>
            </div>`
    ;
  };

  