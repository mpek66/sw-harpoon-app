export async function getNews() {
  const url = "https://sw-harpoon-backend.herokuapp.com/get_articles/time/null/";
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}

export async function getOptions(val) {
  const url = "https://sw-harpoon-backend.herokuapp.com/get_options/" + val;
  let result = await fetch(url).then(response => response.json());
  return result.options;
}
