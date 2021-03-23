import React from 'react';
import { btn } from './Button.module.scss'; // or import styles from './Button.module.scss';

const Button = () => {
  return (
    <>
      <button
        className={btn} // or className={styles.btn}
        onClick={() => alert('I am styled with CSS Modules')}
      >
        I am button 2 - Press Me
      </button>
    </>
  );
};
export default Button;