export const handleSearch = (searchKeyword) => {
  const movieCards = document.querySelectorAll(".movie_card");

  movieCards.forEach((card) => {
    const title = card.querySelector(".movie_title").textContent.toLowerCase();
    const searchedValue = searchKeyword.toLowerCase();

    if (title.includes(searchedValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
};
