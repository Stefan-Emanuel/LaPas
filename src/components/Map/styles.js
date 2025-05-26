import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  mapContainer: {
    height: '85vh',
    width: '100%',
  },
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -100%)',
    zIndex: 1,
    '&:hover': {
      zIndex: 2,
    },
  },
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 120,
  },
  pointer: {
    width: '100%',
    height: 60,
    objectFit: 'cover',
    borderRadius: 4,
    cursor: 'pointer',
  },
  typography: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
}));
