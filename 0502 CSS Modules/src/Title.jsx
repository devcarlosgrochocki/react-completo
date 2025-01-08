import React from 'react';
import styles from './Title.module.css';

const Title = () => {
  console.log(styles);

  return <h1 className={styles["texto-seila"]}>Teste</h1>;
};

export default Title;
