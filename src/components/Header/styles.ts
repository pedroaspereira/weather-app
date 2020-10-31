import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: row;
  width: 1440px;
  max-width: 50vw;
  /* background-color: ${props => props.theme.colors.white}; */
  background-color: transparent;
  margin: 40px;
`;
