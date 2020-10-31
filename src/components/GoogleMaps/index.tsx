import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Search from '../Search';

import mapStyles from './mapStyles';
import Header from '../Header';
import Locate from '../Locate';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 43.653225,
  lng: -79.383186
};

const options = {
  styles: mapStyles,
  disabledDefaultUI: true,
  zoomControl: false
};

export default function GoogleMapsComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDCjZ6nyjGFoMP2mMcVEX6hWoaBpW6PXCo',
    libraries: ['places']
  });
  const [markers, setMakers] = useState<any>([]);

  function getLocation(event) {
    setMakers({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date()
    });
    console.log(markers);
  }

  const mapRef = useRef<any>();
  const onMapLoad = useCallback(map => {
    mapRef.current = map;
  }, []);

  const panTo = useCallback(({ lat, lng }) => {
    mapRef.current.panTo({ lat, lng });
    mapRef.current.setZoom(12);
  }, []);

  if (loadError) return 'Error loding maps';
  if (!isLoaded) return 'Loading Maps';

  return (
    <div>
      <Header>
        <Search panTo={panTo} />
        <Locate panTo={panTo} />
      </Header>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={event => {
          getLocation(event);
        }}
        onLoad={onMapLoad}
      >
        <Marker position={{ lat: markers.lat, lng: markers.lng }} />
      </GoogleMap>
    </div>
  );
}
