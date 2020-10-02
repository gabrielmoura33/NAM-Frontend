import React, { AnchorHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';
import { Container, ArrowIcon } from './styles';

interface MenuFieldProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ComponentType<IconBaseProps>;
  to?: string;
  text: string;
}
const MenuField: React.FC<MenuFieldProps> = ({ icon: Icon, text, ...rest }) => {
  return (
    <Container {...rest}>
      <div>
        <Icon color="#FFF" />
      </div>
      <span>{text}</span>
      <ArrowIcon />
    </Container>
  );
};

export default MenuField;
