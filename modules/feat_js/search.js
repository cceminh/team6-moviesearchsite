export const handleSearch = (searchKeyword) => {
  const movieCards = document.querySelectorAll(".search_card");

  movieCards.forEach((card) => {
    const title = card.querySelector(".search_title").textContent.toLowerCase();
    const searchedValue = searchKeyword.toLowerCase();

    if (title.includes(searchedValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};

// import { movie_section } from "..main_js/main_js";
