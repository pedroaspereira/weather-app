import React from 'react';
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete';

import {
  Combobox,
  ComboboxInput,
  ComboboxList,
  ComboboxOption,
  ComboboxPopover
} from '@reach/combobox';
import { Container, Input, Popover, Options, List } from './styles'

export default function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutoComplete({
    requestOptions: {
      location: { lat: () => 43.653225, lng: () => -79.383186 },
      radius: 100 * 1000
    }
  });

  const handleSelect = async address => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      console.log(lat, lng);
      panTo({ lat, lng });
    } catch (error) {
      console.log('😱 Error: ', error);
    }
  };

  return (
    <Container onSelect={handleSelect}>
      <Input
        value={value}
        onChange={e => {
          setValue(e.target.value);
        }}
        disabled={!ready}
        placeholder={'Type a city to check weather'}
      />
      <Popover>
        <List>
          {status === 'OK' &&
          data.map(({ id, description }) => (
            <Options key={id} value={description} />
          ))}
        </List>
      </Popover>
    </Container>
  );
}
