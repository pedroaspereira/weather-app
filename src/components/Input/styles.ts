import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.white};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.grey};
  padding: 16px;
  width: 100%;
  color: ${props => props.theme.colors.black};

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  input {
    flex: 1;
    background: transparent;
    border: 0;
    &::placeholder {
      color: ${props => props.theme.colors.grey};
    }

    svg {
      margin-left: 16px;
      color: ${props => props.theme.colors.primary} !important;
    }
  }
`;
