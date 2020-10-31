import React from 'react';
import Head from 'next/head';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

import Header from '@/components/Header';
import GoogleMapsComponent from '@/components/GoogleMaps';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>
      {GoogleMapsComponent()}
    </div>
  );
};

export default Home;
