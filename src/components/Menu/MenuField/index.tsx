import React, { AnchorHTMLAttributes, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { IconBaseProps } from 'react-icons';
import { Container, ArrowIcon } from './styles';
import { useAuth } from '../../../hooks/auth';

interface MenuFieldProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: React.ComponentType<IconBaseProps>;
  to?: string;
  text: string;
  action: string;
}
const MenuField: React.FC<MenuFieldProps> = ({
  icon: Icon,
  text,
  action,
  ...rest
}) => {
  const history = useHistory();
  const { signOut } = useAuth();

  const handdleUserAction = useCallback(() => {
    if (action === '/logout') {
      signOut();
    } else {
      history.push(action);
    }
  }, [action, history, signOut]);
  return (
    <Container {...rest} onClick={handdleUserAction}>
      <div>
        <Icon color="#FFF" />
      </div>
      <span>{text}</span>
      <ArrowIcon />
    </Container>
  );
};

export default MenuField;
