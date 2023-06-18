import React, { useRef } from 'react';

export default function InputPassword(props) {
  const label=props.label
  const register=props.register
  const validateConfirmPassword=props.validateConfirmPassword
  const handleTogglePassword = (e) => {
    const password=e.target.previousElementSibling
    const type = password.type === 'password' ? 'text' : 'password';
    password.type = type;
    e.target.classList.toggle('fa-eye-slash')
  };

  return (
    <>
     <input
        {...register(label, {
          validate: validateConfirmPassword,
          required: "true",
          pattern:
            /^(?=.{10,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?\W).*$/,
        })}
        type="password"
        className="span3"
        placeholder="Password"
      />
      
      <i
        className="fa fa-eye"
        style={{ marginLeft: '-30px', cursor: 'pointer', verticalAlign: '5px' }}
        onClick={handleTogglePassword}
      ></i>
    </>
  );
}