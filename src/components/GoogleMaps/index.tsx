import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Search from '../Search';

import mapStyles from './mapStyles';
import Header from '../Header';
import LocateButton from '../LocateButton';
import SearchButton from '../SearchButton';
import Button from '../Button'
import { useFetch } from '@/hooks/useFetch';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: -22.99991,
  lng: -43.36581
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false
};

export default function GoogleMapsComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyDCjZ6nyjGFoMP2mMcVEX6hWoaBpW6PXCo',
    libraries: ['places']
  });
  const [markers, setMarkers] = useState<any>([]);

  function getLocation(event) {
    setMarkers({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
      time: new Date()
    });
    console.log(markers);
  }

  const {data} = useFetch(`http://api.openweathermap.org/data/2.5/find?lat=${markers.lat}&lon=${markers.lng}&cnt=15&APPID=dabbb993d4b0dcd404cbd27f9143ec78`)
  console.log(data)
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
        <LocateButton panTo={panTo} />
        <Button onClick={() => console.log(data.list)} style={{ marginLeft: '5px'}}>Search</Button>
      </Header>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        options={options}
        onClick={(event) => getLocation(event)}
        onLoad={onMapLoad}
      >
        <Marker position={{ lat: markers.lat, lng: markers.lng }} />
      </GoogleMap>
    </div>
  );
}
