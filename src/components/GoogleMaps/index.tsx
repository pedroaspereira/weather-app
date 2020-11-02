import React, { useCallback, useEffect, useRef, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import Search from '../Search';
import mapStyles from './mapStyles';
import Header from '../Header';
import LocateButton from '../LocateButton';
import Button from '../Button';
import WeatherModal from '../WeatherModal';

import { Container } from './styles';

interface IMarkers {
  lat: number;
  lng: number;
  time: Date;
}

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

const GoogleMapsComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ['places']
  });
  const [markers, setMarkers] = useState<IMarkers>({
    lat: null,
    lng: null,
    time: null
  });
  const [showWeatherModal, setShowWeatherModal] = useState<boolean>(false);

  const getLocation = useCallback(event => {
    try {
      setMarkers({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date()
      });
    } catch (error) {
      ('It was not possible to get location');
    }
  }, []);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      setShowWeatherModal(true);
    }
  }, [showWeatherModal]);

  const showModal = () => {
    return showWeatherModal
      ? setShowWeatherModal(false)
      : setShowWeatherModal(true);
  };

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
      <Container>
        <Header>
          <Search panTo={panTo} />
          <LocateButton panTo={panTo} />
          <Button
            onClick={() => {
              showModal();
            }}
            style={{ marginLeft: '5px', height: '50px', width: '80px' }}
          >
            Search
          </Button>
        </Header>
        {showWeatherModal ? (
          <WeatherModal lat={markers.lat} lng={markers.lng} />
        ) : null}
      </Container>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
        options={options}
        // onClick={getData}
        onClick={getLocation}
        onLoad={onMapLoad}
      >
        <Marker position={{ lat: markers.lat, lng: markers.lng }} />
      </GoogleMap>
    </div>
  );
};

export default GoogleMapsComponent;
