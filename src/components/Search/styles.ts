import styled from 'styled-components';
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxPopover,
  ComboboxList
} from '@reach/combobox';

export const Container = styled(Combobox)`
  width: 500px;
`;

export const Input = styled(ComboboxInput)`
  background: ${props => props.theme.colors.white};
  border-radius: 10px;
  border: 1px solid ${props => props.theme.colors.grey};
  padding: 16px;
  width: 100%;
  color: ${props => props.theme.colors.black};
  width: 400px;
  height: 50px;
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
  }
`;

export const Popover = styled(ComboboxPopover)`
  background-color: ${props => props.theme.colors.grey};
  border-radius: 10px;
`;

export const List = styled(ComboboxList)`
  margin: 5px;
  list-style: none;
`;

export const Options = styled(ComboboxOption)`
  color: ${props => props.theme.colors.white};
`;
