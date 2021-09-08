const fetchCategoriesList = async () => {
  const api = await fetch('https://opentdb.com/api_category.php');
  const json = await api.json();

  return json;
};

export const fetchQuestionApi = async (data) => {
  const { difficulty, type, id } = data;

  const fetchCategoryApi = await (await fetch(`https://opentdb.com/api.php?amount=5&category=${id}&difficulty=${difficulty}&type=${type}`)).json();

  // console.log(fetchCategoryApi);
  return fetchCategoryApi;
};

async function findCategoryId(category) {
  const fetchCategoriesApi = await fetchCategoriesList();
  const getCategoriesList = fetchCategoriesApi.trivia_categories;
  const findCategoriesByName = getCategoriesList.find((categoryName) => (
    categoryName.name === category ? categoryName : null
  ));
  const { id } = findCategoriesByName;

  return id;
}

export const fetchQuestions = async (state) => {
  const { category, difficulty, type } = state;
  const id = await findCategoryId(category);
  const data = { category, difficulty, type, id };
  const api = await fetchQuestionApi(data);

  return api;
};

export const categoriesList = async () => {
  const fetchCategoriesApi = await fetchCategoriesList();
  const getCategoriesList = fetchCategoriesApi.trivia_categories; // Array com as categorias
  const getCategoriesName = await getCategoriesList.map((item) => (
    item.name
  ));

  return getCategoriesName;
};
