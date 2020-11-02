import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 100vh;
  background: ${props => props.theme.colors.primary};

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 15px;

    button {
      background-color: transparent;
      border: none;

      p {
        color: ${props => props.theme.colors.white};
      }
    }
  }

  h1 {
    margin: 25px;
    color: ${props => props.theme.colors.white};
  }

  li {
    list-style: none;
    margin: 0 15px;

    div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      p {
        color: ${props => props.theme.colors.white};
        line-height: 20px;
        font-size: 14px;
        margin: 10px;
      }

      button {
        font-size: 16px;
        line-height: 20px;
        border: none;
        margin: 10px;
        background-color: transparent;
        color: ${props => props.theme.colors.white};
        font-weight: bold;
      }
    }
  }
`;
