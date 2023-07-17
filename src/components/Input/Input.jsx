import css from './Input.module.css';
import PropTypes from 'prop-types';

const Input = ({ value, onChange }) => {
  return (
    <>
      <h2 className={css.head}>Phone book</h2>
      <p className={css.disclaimer}>use it on your own risk</p>

      <input
        className={css.input}
        value={value}
        type="text"
        name="filter"
        onChange={onChange}
      />
    </>
  );
};

Input.propTypes = {
  searchItem: PropTypes.func,
};

export default Input;
