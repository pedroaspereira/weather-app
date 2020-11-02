import React from 'react';

import { FiMapPin } from 'react-icons/fi';

import Button from '../Button';

export default function LocateButton({ panTo }) {
  return (
    <Button
      style={{
        marginLeft: '5px',
        height: '50px',
        width: 'auto'
      }}
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          () => null
        );
      }}
    >
      <FiMapPin size={20} />
    </Button>
  );
}
