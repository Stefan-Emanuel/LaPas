import React, { useEffect, useState, useMemo } from "react";
import { CssBaseline, Grid } from '@material-ui/core';

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import { getPlacesData } from "./api";

const App = () => {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [coordinates, setCoordinates] = useState({ lat: 48.8566, lng: 2.3522 }); // Paris default
  const [bounds, setBounds] = useState({});

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

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
    // Geolocation disabled (Paris default)
    /*
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log("📍 Geolocation:", latitude, longitude);
        setCoordinates({ lat: latitude, lng: longitude });
      },
      (err) => console.warn("⚠️ Geolocation denied, using default.")
    );
    */
  }, []);

  useEffect(() => {
    if (filteredPlaces.length === 0 && places.length > 0 && Number(rating) > 0) {
      const timeout = setTimeout(() => {
        console.warn("⚠️ Nicio locație nu corespunde filtrului. Resetăm ratingul...");
        setRating("");
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [filteredPlaces, rating, places]);

  useEffect(() => {
    if (bounds.sw && bounds.ne && coordinates.lat && coordinates.lng) {
      console.log("🗺️ Bounds received:", bounds);
      console.log("📌 Coordinates:", coordinates);
      setIsLoading(true);

      getPlacesData(type, bounds.sw, bounds.ne)
        .then((data) => {
          console.log("🔍 Date brute din API:", data);

          const cleanData = data?.filter((place) =>
            place.name && place.num_reviews > 0
          );

          console.log("🧹 Date curățate:", cleanData);
          setPlaces(cleanData || []);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("❌ Eroare la getPlacesData:", err);
          setIsLoading(false);
        });
    } else {
      console.log("⏳ Aștept coordonate și bounds pentru apelul API...");
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
