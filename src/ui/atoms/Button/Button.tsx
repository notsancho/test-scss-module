import * as React from 'react';
import styles from './Button.module.scss';

export const Button: React.FC = () => {
  return (
    <button className={styles.btn} onClick={() => alert('I am styled with CSS Modules')}>
      I am button 2 - Press Me
    </button>
  );
};
