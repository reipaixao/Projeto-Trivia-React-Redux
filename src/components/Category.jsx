import React from 'react';
import { fetchCategoriesList } from '../pages/pageFunctions/loginFuncs';
import Select from './Select';

class Category extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      categoryName: '',
    };

    this.categoriesList = this.categoriesList.bind(this);
    this.handleCategoryName = this.handleCategoryName.bind(this);
  }

  async componentDidMount() {
    this.categoriesList();
  }

  async categoriesList() {
    const fetchCategoriesApi = await fetchCategoriesList();
    const getCategoriesList = fetchCategoriesApi.trivia_categories;
    const getCategoriesName = await getCategoriesList.map((item) => (
      item.name
    ));

    this.setState({
      categories: getCategoriesName,
    });
  }

  handleCategoryName({ target: { value } }) {
    this.setState({
      categoryName: value,
    });
  }

  render() {
    const { categories, categoryName } = this.state;

    return (
      <section>
        <Select
          id="select-category"
          name="category"
          labelText="Escolha a categoria: "
          options={ ['', ...categories] }
          onChange={ this.handleCategoryName }
        />
        { categoryName ? (
          <h2
            data-testid="question-category"
          >
            { categoryName }
          </h2>
        ) : null }
      </section>
    );
  }
}

export default Category;
