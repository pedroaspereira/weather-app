import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: ${props => props.theme.colors.primary};
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #ffffff;
  width: 100%;
  font-weight: 500;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#FFFFFF')};
  }
`;
