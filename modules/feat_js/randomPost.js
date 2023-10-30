import { movie_arr } from "./movieShow.js";

const render = (movie) => {
  const temp_html = `<div class="random_detail"><div><h1 class="random_text" >A movie for you!</h1></div>
    <div class="movie_card3" id=${movie.id}><a id="a_movie_card3" href="./movie_detail_page.html?id=${movie.id}">
    <img class="movie_img" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"></a>
    <button id="modal_close" class="modal_close">Close</button>
    </div>
    </div>`;
  return temp_html;
};

export async function randomPost() {
  let random = movie_arr[Math.floor(Math.random() * 60)];
  document.querySelector(".randomP").innerHTML = render(random);
}
export const randomBtn = document.getElementById("randomBtn");
document.querySelector(".randomP").style.display = "none";

export function display() {
  randomPost();
  document.querySelector(".randomP").style.display === "none"
    ? (document.querySelector(".randomP").style.display = "flex")
    : (document.querySelector(".randomP").style.display = "none");
}
randomBtn.addEventListener("click", display);

/** */
export const overay = document.querySelector(".randomP");
export const closeBtn = document.querySelector(".modal_close");

export const closeModal = () => {
  document.querySelector(".randomP").style.display = "none";
};

overay.addEventListener("click", closeModal);
