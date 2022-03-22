// const random = 'random';

// const testStateParam = (data) => data === random;

const resetLocalStorageScore = () => {
  localStorage.setItem('score', JSON.stringify(0));
};

export default resetLocalStorageScore;

// const fetchCategoriesList = async () => {
//   const api = await fetch('https://opentdb.com/api_category.php');
//   const json = await api.json();

//   return json;
// };

// export const fetchQuestionApi = async (data) => {
//   const verifyState = await testStateParam(data);

//   if (verifyState) {
//     const token = localStorage.getItem('token');

//     const fetchApi = await (await
//     fetch(`https://opentdb.com/api.php?amount=5&token=${token}`))
//       .json();

//     const { results } = fetchApi;
//     // console.log(fetchApi);
//     return results;
//   }
//   const { difficulty, type, id } = data;

//   const fetchCategoryApi = await (await
//   fetch(`https://opentdb.com/api.php?amount=5&category=${id}&difficulty=${difficulty}&type=${type}`)).json();

//   return fetchCategoryApi;
// };

// async function findCategoryId(category) {
//   const fetchCategoriesApi = await fetchCategoriesList();
//   const getCategoriesList = fetchCategoriesApi.trivia_categories;
//   const findCategoriesByName = getCategoriesList.find((categoryName) => (
//     categoryName.name === category ? categoryName : null
//   ));
//   const { id } = findCategoriesByName;

//   return id;
// }

// export async function fetchQuestions(state) {
//   const verifyState = await testStateParam(state);

//   if (verifyState) {
//     const fetchRandom = await fetchQuestionApi(random);
//     return fetchRandom;
//   }

// const { category, difficulty, type } = state;

// const id = await findCategoryId(category);
// const data = { category, difficulty, type, id };
// const api = await fetchQuestionApi(data);

// return api;
// }

// export const categoriesList = async () => {
//   const fetchCategoriesApi = await fetchCategoriesList();
//   const getCategoriesList = fetchCategoriesApi.trivia_categories; // Array com as categorias
//   const getCategoriesName = await getCategoriesList.map((item) => (
//     item.name
//   ));

//   return getCategoriesName;
// };
