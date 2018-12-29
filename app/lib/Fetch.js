export async function getNews() {
  const url = "https://sw-harpoon-backend.herokuapp.com/get_articles/id/null/";
  let result = await fetch(url).then(response => response.json());
  return result.data;
}

export async function getOptions(type) {
  const url = "https://sw-harpoon-backend.herokuapp.com/get_options/" + type + "/";
  let result = await fetch(url).then(response => response.json());
  return result.data;
}

export async function getArticles(type, filter) {
  const url = "https://sw-harpoon-backend.herokuapp.com/get_articles/" + type + "/" + filter + "/";
  let result = await fetch(url).then(response => response.json());
  return result.data;
}

export async function getTitleOrdered() {
  const url = "https://sw-harpoon-backend.herokuapp.com/get_ordered_titles/";
  let result = await fetch(url).then(response => response.json());
  return result.data;
}

export async function loadApp() {
  const url = "https://sw-harpoon-backend.herokuapp.com/load_app/";
  let result = await fetch(url).then(response => response.json());
  return result.data;
}
