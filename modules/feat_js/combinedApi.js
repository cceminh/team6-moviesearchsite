import { fetchMovieData } from "./movieShow.js";

// api 3개 통합
const a = await fetchMovieData("upcoming");
const b = await fetchMovieData("top_rated");
const c = await fetchMovieData("popular");

// 중복 제거 전 배열 {60}
export const combinedApiArray = [...a, ...b, ...c];

//중복 제거 배열 {57}
export const unique = [
  ...new Map(combinedApiArray.map((m) => [m.id, m])).values(),
];
