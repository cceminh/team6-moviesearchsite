const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NDUxYzQzN2E2YmUxYzExNTkwMWJjZjhlNDRjZTAzMyIsInN1YiI6IjY1MmYzYjgwMGNiMzM1MTZmZDRiODE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o6SNT2Vu2ngYljvJr37-sa7jrw_jDKEBIWlv3tWJt30",
  },
};
const url =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

let movieList = [];

//data 가공
fetch(url, options)
  .then((res) => res.json())
  .then((res) => {
    const movieList = res.results;

    const cardList = document.querySelector(".cardlist");

    let card = "";

    movieList.forEach((movie) => {
      const title = movie.title;
      const overview = movie.overview;
      const rating = movie.vote_average;
      const imgPath = movie.poster_path;
      const idValue = movie.id;

      const temp_html = `<div onclick="showAlert(${idValue})" class="card" id="content">
              <img src="https://image.tmdb.org/t/p/w500${imgPath}" alt="The Godfather">
              <h3 id="title" class="title">${title}</h3>
              <p id="overview">${overview}</p>
              <p id="rating">평점:${rating}</p>
              </div>`;

      card = card + temp_html;
    });
    cardList.innerHTML = card;
  });

function showAlert(id) {
  alert(`영화의 id:${id}`);
}

/** 검색기능 시작 */

fetch(url, options)
  .then((res) => res.json())
  .then((res) => {
    movieList = res.results;
  });

const searchButton = document.getElementById("searchButton"); // 서치버튼을 부를 때마다 코드를 써야 하까 전역변수로 담아버림.
const movieNameInput = document.getElementById("movieName"); //인풋에 입력된 값
const refreshButton = document.getElementById("refreshButton"); // 새로고침 버튼 불러오기
const cardList = document.querySelector(".cardlist"); //해당 클래스안에 부모노드(card)를 선택함.

searchButton.addEventListener("click", () => {
  searchMovie();
});

refreshButton.addEventListener("click", () => {
  location.reload();
});

movieNameInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchMovie();
  }
});

/**입력값을 바탕으로 영화 데이터에서 일치하는 값을 찾아주는 함수*/
let searchMovie = () => {
  const movieName = movieNameInput.value;

  let searchResults = movieList.filter(function (movie) {
    return movie.title.toLowerCase().includes(movieName.toLowerCase());
  });

  displaySearchResults(searchResults);
};

//검색결과를 화면에 보여주는 함수
function displaySearchResults(results) {
  cardList.innerHTML = "";

  if (results.length === 0) {
    alert("검색 결과가 없습니다.");
    location.reload();
  } else {
    results.forEach((movie) => {
      const title = movie.title;
      const overview = movie.overview;
      const rating = movie.vote_average;
      const imgPath = movie.poster_path;
      const idValue = movie.id;

      const temp_html = `<div onclick="showAlert(${idValue})" class="card" id="content">
                  <img src="https://image.tmdb.org/t/p/w500${imgPath}" alt="${title}">
                  <h3 id="title" class="title">${title}</h3>
                  <p id="overview">${overview}</p>
                  <p id="rating">평점:${rating}</p>
              </div>`;

      cardList.innerHTML += temp_html;
    });
  }
}
