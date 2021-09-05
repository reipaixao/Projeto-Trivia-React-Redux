import React from 'react';
import Select from '../components/Select';
import { fetchCategoriesList, fetchGameApi } from './pageFunctions/loginFuncs';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.categoriesList = this.categoriesList.bind(this);
  }

  async componentDidMount() {
    // Categories Api
    const fetchCategoriesApi = await fetchCategoriesList();
    const getCategoriesList = fetchCategoriesApi.trivia_categories;
    const getCategoriesName = await getCategoriesList.map((item) => (
      item.name
    ));

    // Game Api
    const token = localStorage.getItem('token');
    const fetchTriviaApi = await fetchGameApi(token);
    const apiResults = fetchTriviaApi.results;
    console.log(apiResults);

    this.categoriesList(getCategoriesName);
  }

  categoriesList(categoriesName) {
    this.setState({
      categories: categoriesName,
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <Select
        id="select-category"
        name="category"
        labelText="Escolha a categoria: "
        options={ categories }
      />
    );
  }
}

export default Game;
