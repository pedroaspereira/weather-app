import React from 'react';

export default function Locate({ panTo }) {
  return (
    <button
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          position => {
            console.log(position);
          },
          () => null
        );
      }}
    >
      ||
    </button>
  );
}
