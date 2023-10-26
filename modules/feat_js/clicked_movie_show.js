import {generateMovieCards} from "../feat_js/movieShow.js";
import {handleSearch} from "../feat_js/search.js";
import { fetchMovieData } from "../feat_js/movieShow.js";



// export function showClickedMovieDetail() {

//   fetchMovieData();
//   // const generateMovieCards = async() => {
//   //   const movies = await fetchMovieData(); 

//   //   const cardList = document.querySelector("#card-list"); 
//   //   cardList.innerHTML = movies 
//   //     .map(
//   //       (movie) => 
//   //       `<li class="movie-card" id=${movie.id}>
//   //           <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}"/>
//   //           <h3 class="movie-title">${movie.title}</h3>
//   //           <p>${movie.overview}</p>
//   //           <p>${movie.vote_average}</p>
//   //       </li>`
//   //     )
//   //     .join("");

//   // };
//   alert(`The movie detail you clicked is below. Id is ${event.target.id} and movie title is ${event.target.title}`);
// }

