
import { generateMovieDetailCards } from "../feat_js/clickedMovieShow.js";
import { goHomeBtn } from "../feat_js/goHome.js";

/* 상세정보 영화카드 만들기 */
generateMovieDetailCards();

/* 홈으로 가기 */
goHomeBtn.addEventListener('click', (event) => {
  window.location.href = 'page.html';
});