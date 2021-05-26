import React from 'react';

const Input = ({
  placeholder="Please Enter",
  input,
  meta,
  name,
  disabled = false,
  allowPattern = null
}) => {
  const onChange = (event) => {
    if(allowPattern){
      const regex = new RegExp(allowPattern);
      if(!regex.test(event.target.value)){
        event.target.value = input.value;
      }
    }
    input.onChange(event);
  }

  if(disabled){
    return <div>{input.disabled}</div>
  } else {
    return (
      <>
      <input value={input.value} onChange={onChange} placeholder={placeholder}/>
      {meta.submitFailed && <span>{meta.error}</span>}
      </>
    )
  }
}

export default Input;