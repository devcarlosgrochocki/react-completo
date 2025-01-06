import React from 'react';
import Input from './Form/Input';
import useForm from './Hooks/useForm';

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Nome" id="nome" type="text" name="nome" {...nome} />
      <Input label="Sobrenome" id="sobrenome" type="text" name="sobrenome" {...sobrenome} />
      <Input
        label="CEP"
        id="cep"
        type="text"
        name="cep"
        placeholder="00000-000"
        {...cep}
      />
      <Input label="Email" id="email" type="text" name="email" {...email} />
      <button>Enviar</button>
    </form>
  );
};
export default App;

