import { movie_arr } from "./movieShow.js";

const render = (movie) => {
  const temp_html = `<a id="a_movie_card2" href="./movie_detail_page.html?id=${movie.id}">
    <div class="movie_card2" id=${movie.id}>
        
        <h3 id="title" class="movie_title2">${movie.title}</h3>
    </div>
    </a>`;
  return temp_html;
};
// <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
// id="a_movie_card" href="./movie_detail_page/?${movie.id}.html"
//   <p id="overview">${movie.overview}</p>
//   <p id="rating">평점:${movie.vote_average}</p>
export async function randomPost() {
  let random = movie_arr[Math.floor(Math.random() * 60)];
  document.querySelector(".randomP").innerHTML = render(random);
}

export const randomBtn = document.getElementById("randomBtn");

function display() {
  randomPost();

  document.querySelector(".randomP").style.display === "none"
    ? (document.querySelector(".randomP").style.display = "block")
    : (document.querySelector(".randomP").style.display = "none");
}
randomBtn.addEventListener("click", display);
