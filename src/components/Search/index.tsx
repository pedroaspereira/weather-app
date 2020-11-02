import React from 'react';
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete';

import { Container, Input, List, Options, Popover } from './styles';

export default function Search({ panTo }) {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutoComplete({
    requestOptions: {
      location: { lat: () => -22.99991, lng: () => -43.36581 },
      radius: 100 * 2000
    },
    debounce: 300
  });

  const handleInput = e => {
    setValue(e.target.value);
  };

  const handleSelect = async address => {
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
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
          handleInput(e);
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
