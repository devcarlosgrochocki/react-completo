import React from 'react';

const Header = () => {
  console.log('Renderizou');
  return <div>Header fixo</div>;
};

export default React.memo(Header);
