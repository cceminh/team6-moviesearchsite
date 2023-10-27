import { generateMovieCards } from "../feat_js/movieShow.js";
import { handleSearch } from "../feat_js/search.js";
import { randomPost } from "../feat_js/randomPost.js";

generateMovieCards();

/** 검색기능 시작 */

const searchInput = document.querySelector("#search_input");
searchInput.focus();

const searchForm = document.querySelector("#search_form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSearch(searchInput.value);
});


