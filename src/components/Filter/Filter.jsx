import PropTypes from 'prop-types';
import s from './Input.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <h2 className={s.head}>Phone book</h2>
      <p className={s.disclaimer}>use it on your own risk</p>

      <input
        className={s.input}
        style={{ display: 'block', marginTop: '5px' }}
        value={value}
        type="text"
        name="filter"
        onChange={onChange}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
