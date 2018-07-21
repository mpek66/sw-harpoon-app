const url =
  "https://sw-harpoon-backend.herokuapp.com/get_articles/time/null/";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}
