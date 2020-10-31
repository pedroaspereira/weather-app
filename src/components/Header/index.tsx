import React from 'react';

import Input from '../Input';
import Button from '../Button';

import { Container } from './styles';

const Header: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Header;
