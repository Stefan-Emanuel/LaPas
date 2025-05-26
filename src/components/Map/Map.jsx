import React, { useMemo } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import useStyles from './styles';
import mapStyles from './mapStyles';
import debounce from 'lodash.debounce';

const Map = ({ setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
  const classes = useStyles();

  const handleMapChange = useMemo(() => debounce((e) => {
    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
  }, 1000), []);

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{ disableDefaultUI: true, zoomControl: true, styles: mapStyles }}
        onChange={handleMapChange}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, i) => (
          place.latitude && place.longitude && (
            <div
              key={i}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              className={classes.markerContainer}
            >
              <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} variant="subtitle2" gutterBottom noWrap>
                  {place.name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={place.photo ? place.photo.images.large.url : 'https://via.placeholder.com/150'}
                  alt={place.name}
                />
                <Rating name="read-only" size="small" value={Number(place.rating)} readOnly />
              </Paper>
            </div>
          )
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
