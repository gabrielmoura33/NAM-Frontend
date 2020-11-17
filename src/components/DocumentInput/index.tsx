import React, { useRef, InputHTMLAttributes, useEffect } from 'react';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
}

const DocumentInput: React.FC<InputProps> = ({ name, value, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <input ref={inputRef} value={value} {...rest} />;
};

export default DocumentInput;
