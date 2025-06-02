import React, { useMemo } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Box
} from "@material-ui/core";

import PlaceDetails from "../PlaceDetails/PlaceDetails";
import useStyles from './styles';

const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {
  const classes = useStyles();

  // Creeaza referinte pentru fiecare item din lista
  const elRefs = useMemo(
    () => Array(places?.length).fill().map(() => React.createRef()),
    [places]
  );

  return (
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Restaurante, Hoteluri & Atractii Turistice
      </Typography>

      {isLoading ? (
        // Afiseaza loader daca datele sunt inca in curs de incarcare
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          {/* Filtru pentru tipul locatiei */}
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurante</MenuItem>
              <MenuItem value="hotels">Hoteluri</MenuItem>
              <MenuItem value="attractions">Atractii Turistice</MenuItem>
            </Select>
          </FormControl>

          {/* Filtru pentru rating */}
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>Toate</MenuItem>
              <MenuItem value={3}>Peste 3.0</MenuItem>
              <MenuItem value={4}>Peste 4.0</MenuItem>
              <MenuItem value={4.5}>Peste 4.5</MenuItem>
            </Select>
          </FormControl>

          {/* Lista locatiilor */}
          {places?.length > 0 ? (
            <Grid container spacing={3} className={classes.list}>
              {places.map((place, i) => (
                <Grid ref={elRefs[i]} key={i} item xs={12}>
                  <PlaceDetails
                    place={place}
                    selected={Number(childClicked) === i}
                    refProp={elRefs[i]}
                  />
                </Grid>
              ))}
            </Grid>
          ) : (
            // Mesaj afisat daca nu exista rezultate
            <Box mt={2}>
              <Typography variant="subtitle1" color="textSecondary">
                Niciun rezultat găsit pentru filtrul selectat.
              </Typography>
            </Box>
          )}
        </>
      )}
    </div>
  );
};

export default List;
