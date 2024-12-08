import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <div>
      <Input id="email" label="Email" />
      <Input id="senha" label="Senha" required type="password" />
      <Button />
    </div>
  );
};

export default Form;
