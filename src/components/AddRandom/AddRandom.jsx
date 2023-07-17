import React from 'react';
import css from './AddRandom.module.css';

const AddRandom = ({ addItem }) => {
  return (
    <button
      onClick={() =>
        addItem({
          name: Math.random().toString(36).substring(2, 7),
          phone: Math.floor(100000000 + Math.random() * 900000000),
        })
      }
      className={css.btn}
    >
      Add random (for testing)
    </button>
  );
};

export default AddRandom;
