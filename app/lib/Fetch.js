export async function getNews() {
  const url = "https://sw-harpoon-backend.herokuapp.com/get_articles/time/null/";
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}

export async function getOptions(type) {
  const url = "https://sw-harpoon-backend.herokuapp.com/get_options/" + type + "/";
  let result = await fetch(url).then(response => response.json());
  return result.options;
}

export async function getArticles(type, filter) {
  const url = "https://sw-harpoon-backend.herokuapp.com/get_articles/" + type + "/" + filter + "/";
  let result = await fetch(url).then(response => response.json());
  console.log(result);
  return result.articles;
}
