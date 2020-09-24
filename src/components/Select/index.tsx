import React, {
  useRef,
  SelectHTMLAttributes,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
}

const Select: React.FC<SelectProps> = ({ name, children, ...rest }) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { fieldName, registerField } = useField(name);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);
  return (
    <Container isFocused={isFocused}>
      <select
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        ref={selectRef}
        {...rest}
      >
        {children}
      </select>
    </Container>
  );
};

export default Select;
