export const handleSearch = async (searchKeyword) => {
  const movieCards = document.querySelectorAll(".search_card");

  movieCards.forEach((card) => {
    const title = card.querySelector(".search_title").textContent.toUpperCase();
    const searchedValue = searchKeyword.toUpperCase();

    if (title.includes(searchedValue) && 0 < searchedValue.length) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
      console.log("오류");
    }
  });
};
