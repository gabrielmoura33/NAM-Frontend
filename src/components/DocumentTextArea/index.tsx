import React, { useRef, InputHTMLAttributes, useEffect } from 'react';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

const DocumentTextArea: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <textarea ref={inputRef} {...rest} />;
};

export default DocumentTextArea;
