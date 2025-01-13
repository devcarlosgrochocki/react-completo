import React from 'react';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const params = useParams();
  console.log(params);
  return <h1>Produto {params.id}</h1>;
};

export default Produto;
