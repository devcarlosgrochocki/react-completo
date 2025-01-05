import React from 'react';

const Input = ({ id, label, setValue, ...props }) => {
  console.log(props);

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        {...props}
      />
    </>
  );
};

export default Input;
