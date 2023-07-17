import { useState } from 'react';
import css from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ addItem }) => {
  const [state, setState] = useState({
    name: '',
    phone: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    addItem(state);
    setState({
      name: '',
      phone: '',
    });
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const { name, phone } = state;
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className={css.item}
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        onChange={handleChange}
        className={css.item}
        type="tel"
        name="tel"
        placeholder="tel"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button className={css.btn} type="submit">
        Sumbit
      </button>
    </form>
  );
};

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
};

export default Form;
