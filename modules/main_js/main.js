import { generateMovieCards } from "../feat_js/movieShow.js";
import { searchMovieCardss } from "../feat_js/movieShow.js";
import { handleSearch } from "../feat_js/search.js";

generateMovieCards();
searchMovieCardss();

/** 검색기능 시작 */
export let movie_section = document.getElementById("movie_section");
let search_results = document.getElementById("search_results");

const searchInput = document.querySelector("#search_input");
searchInput.focus();

const searchForm = document.querySelector("#search_form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  movie_section.style.display = "none";
  handleSearch(searchInput.value);
  setTimeout(() => (search_results.style.display = "block"), 100);
});
