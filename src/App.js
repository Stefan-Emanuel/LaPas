import React, { useEffect, useState, useMemo } from "react";
import { CssBaseline, Grid } from '@material-ui/core';

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlacesData } from "./api";

const App = () => {
  // Lista locatiilor afisate (restaurante, hoteluri, atractii)
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  // Coordonate pentru harta (default: Paris)
  const [coordinates, setCoordinates] = useState({ lat: 48.8566, lng: 2.3522 });
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  // Filtrare dupa rating (evitam locatii fara rating sau cu scor mic)
  const filteredPlaces = useMemo(() => {
    if (!rating || Number(rating) === 0) return places;

    const result = places.filter((place) => {
      const placeRating = Number(place.rating);
      return !isNaN(placeRating) && placeRating > Number(rating);
    });

    console.log("📊 Filtered places:", result);
    return result;
  }, [places, rating]);

  useEffect(() => {
    // Cod pentru geolocatie (dezactivat, folosesc Paris default)
    /*
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      },
      () => console.warn("Geolocatie refuzata, se foloseste default.")
    );
    */
  }, []);

  useEffect(() => {
    // Daca nu exista locatii care sa respecte filtrul -> resetam filtrul dupa cateva secunde
    if (filteredPlaces.length === 0 && places.length > 0 && Number(rating) > 0) {
      const timeout = setTimeout(() => {
        console.warn("Nicio locatie gasita. Resetam filtrul de rating...");
        setRating("");
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [filteredPlaces, rating, places]);

  useEffect(() => {
    // Cand avem coordonate si bounds, cerem datele din API
    if (bounds.sw && bounds.ne && coordinates.lat && coordinates.lng) {
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne)
      
        .then((data) => {
          // Pastram doar locatiile cu nume si cel putin un review
          const cleanData = data?.filter((place) =>
            place.name && place.num_reviews > 0
          );

          setPlaces(cleanData || []);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Eroare la getPlacesData:", err);
          setIsLoading(false);
        });
        
    }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline />
      <Header setCoordinates={setCoordinates} />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces}
            childClicked={childClicked}
            isLoading={isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length || rating === "" ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
