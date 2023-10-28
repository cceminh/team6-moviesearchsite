// import {goToMovieDetail} from "../feat_js/goto_movie_detail.js";
// import {showClickedMovieDetail} from "../feat_js/clicked_movie_show.js";
// import {generateMovieCards} from "../feat_js/movieShow.js";
// import {handleSearch} from "../feat_js/search.js";
// import { fetchMovieData } from "../feat_js/movieShow.js";

// goToMovieDetail();
// showClickedMovieDetail();

// import {fetchMovieDetailData} from "../feat_js/clicked_movie_show.js";
import { generateMovieDetailCards } from "../feat_js/clicked_movie_show.js";
import { goHomeBtn } from "../feat_js/goHome.js";


generateMovieDetailCards("upcoming");
generateMovieDetailCards("top_rated");
generateMovieDetailCards("popular");


// 홈으로 가기 //
goHomeBtn.addEventListener('click', (event) => {
  window.location.href = 'page.html';
});