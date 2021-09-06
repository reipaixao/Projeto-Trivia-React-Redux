import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submitQuestions } from '../redux/actions/fetchActions';
import { fetchQuestions, categoriesList } from '../pages/pageFunctions/gameFuncs';
import Button from './Button';
import Select from './Select';

class Category extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      category: 'General Knowledge',
      difficulty: 'medium',
      type: 'boolean',
    };

    this.setCategoriesList = this.setCategoriesList.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    await this.setCategoriesList();
  }

  async setCategoriesList() {
    this.setState({
      categories: await categoriesList(),
    });
  }

  async handleChange({ target: { value, name } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { questions } = this.props;
    const request = await fetchQuestions(this.state);
    console.log(await request);

    return questions(request);
  }

  render() {
    const { categories, category, difficulty, type } = this.state;
    return (
      <section>
        <Select
          id="select-category"
          name="category"
          labelText="Escolha a categoria: "
          options={ categories }
          onChange={ this.handleChange }
        />
        <Select
          id="select-difficulty"
          name="difficulty"
          labelText="Escolha a dificuldade: "
          options={ ['easy', 'medium', 'hard'] }
          value={ difficulty }
          onChange={ this.handleChange }
        />
        <Select
          id="select-question-type"
          name="type"
          labelText="Escolha o tipo de categoria: "
          options={ ['boolean', 'multiple'] }
          value={ type }
          onChange={ this.handleChange }
        />
        <Button
          id="submit"
          onClick={ () => this.handleClick() }
          text="Iniciar Jogo"
        />
        { category ? (
          <h2
            data-testid="question-category"
          >
            { category }
          </h2>
        ) : null }
      </section>
    );
  }
}

const { func } = PropTypes;

Category.propTypes = {
  questions: func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  questions: (payload) => dispatch(submitQuestions(payload)),
});

export default connect(null, mapDispatchToProps)(Category);
