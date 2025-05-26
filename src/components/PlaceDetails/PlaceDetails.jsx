import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip
} from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';
import LocationOn from "@material-ui/icons/LocationOn";

import useStyles from './styles';

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place?.photo?.images?.large?.url || 'https://pluspng.com/img-png/restaurant-png-hd--1920.png'}
        title={place?.name || "Restaurant"}
      />

      <CardContent>
        <Typography gutterBottom variant="h5">
          {place?.name || "No Name"}
        </Typography>

        <Box display="flex" justifyContent="space-between" my={1}>
          <Rating size="small" value={Number(place?.rating) || 0} readOnly />
          <Typography variant="subtitle1" component="p">
            {place?.rating ? `${place.rating} stars` : "No rating"}
          </Typography>
        </Box>

        {place?.price_level && (
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography variant="subtitle1">{place.price_level}</Typography>
          </Box>
        )}

        {place?.ranking && (
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography variant="subtitle1">{place.ranking}</Typography>
          </Box>
        )}

        {place?.awards?.map((award, i) => (
          <Box key={i} my={1} display="flex" alignItems="center" gap={1}>
            {award?.images?.small && (
              <img src={award.images.small} alt={award.display_name} />
            )}
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <Chip
            key={name}
            size="small"
            label={name}
            className={classes.chip}
          />
        ))}

        {place?.address && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOn /> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography
            gutterBottom
            variant="subtitle2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}

        <CardActions>
          {place?.web_url && (
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.web_url, '_blank')}
            >
              Trip Advisor
            </Button>
          )}
          {place?.website && (
            <Button
              size="small"
              color="primary"
              onClick={() => window.open(place.website, '_blank')}
            >
              Website
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
