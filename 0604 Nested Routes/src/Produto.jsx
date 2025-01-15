import { useParams, Link, Outlet, Routes, Route } from 'react-router-dom';

import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado';

const Produto = () => {
  const params = useParams();

  console.log(params.id);

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <Link to="../">Descrição</Link>
        <Link to="../avaliacao">Avaliação</Link>
        <Link to="../customizado">Customizado</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes>
    </div>
  );
};

export default Produto;
