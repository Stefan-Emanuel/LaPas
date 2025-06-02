import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  // Salvare instanta autocomplete cand se incarca
  const onLoad = (autoC) => setAutocomplete(autoC);

  // Preia coordonatele locatiei cautate si le trimite mai departe
  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setCoordinates({ lat, lng });
      }
    }
  };

  return (
    <AppBar position="static" style={{
  background: 'linear-gradient(to right, #87CEEB, #50a2d3)'
}}>
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
  <img
    src="/favicon.png" 
    alt="logo"
    style={{ height: 90, marginRight: 12, borderRadius: 8 }}
  />
  <Typography variant="h5" className={classes.title}>
    LaPas
  </Typography>
</Box>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Viziteaza Locuri Noi
          </Typography>

          {/* Cautare cu autocomplete pe harta Google */}
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
