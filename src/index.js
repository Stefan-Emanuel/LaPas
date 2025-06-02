import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoadScript } from '@react-google-maps/api';

// Selectez elementul root din HTML (acolo se incarca aplicatia)
const root = ReactDOM.createRoot(document.getElementById('root'));

//  Google Maps cu cheia API, apoi pornesc aplicatia
root.render(
  <LoadScript
    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} // Cheia pentru Google Maps
    libraries={['places']} // Incarcare si biblioteca "places" (locatii)
  >
    <App />
  </LoadScript>
);
