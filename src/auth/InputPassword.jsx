import React, { useRef } from 'react';

export default function InputPassword(props) {
  const passwordRef = useRef(null);
  const label=props.label
  const register=props.register
  const validateConfirmPassword=props.validateConfirmPassword
  const handleTogglePassword = () => {
    const password = passwordRef.current;
    const type = password.type === 'password' ? 'text' : 'password';
    password.type = type;
  };

  return (
    <>
      <input
      {...register(label,{validate:validateConfirmPassword, required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,30}$/})} 
        type="password"
        className="span3"
        placeholder="Password1"
        ref={passwordRef}
        
      />
      <i
        className="fa fa-eye"
        style={{ marginLeft: '-30px', cursor: 'pointer', verticalAlign: '5px' }}
        onClick={handleTogglePassword}
      ></i>
    </>
  );
}