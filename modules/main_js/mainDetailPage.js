
import { generateMovieDetailCards } from "../feat_js/clickedMovieShow.js";
import { goHomeBtn } from "../feat_js/goHome.js";
import { goBackBtn } from "../feat_js/goHome.js";
import {initializeCommentSystem} from "../feat_js/commentsystem.js"
/* 상세정보 영화카드 만들기 */
generateMovieDetailCards();
initializeCommentSystem();

/* 홈으로 가기 go*/
goHomeBtn.addEventListener('click', (event) => {
  window.location.href = 'index.html';
});
goBackBtn.addEventListener('click', (event) => {
  window.location.href = 'index.html';
});
