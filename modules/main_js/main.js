import { generateMovieCards } from "./movieShow.js";
import { handleSearch } from "./search.js";

generateMovieCards();

/** 검색기능 시작 */

const searchInput = document.querySelector("#search_input");
searchInput.focus();

const searchForm = document.querySelector("#search_form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSearch(searchInput.value);
});
