import { fetchMovieData } from "./movieShow.js";

// api 3개 통합.
const a = await fetchMovieData("upcoming");
const b = await fetchMovieData("top_rated");
const c = await fetchMovieData("popular");

export const combinedArray = [...a, ...b, ...c];

export const unique = [
  ...new Map(combinedArray.map((m) => [m.id, m])).values(),
];

console.log(unique);