import React from 'react';

import {FiMapPin} from 'react-icons/fi'

import Button from '../Button'

export default function LocateButton({ panTo }) {
  return (
    <Button style={{ marginLeft: '5px'}}
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            })
          },
          () => null
        );
      }}
    >
      <FiMapPin size={20}/>
    </Button>
  );
}
