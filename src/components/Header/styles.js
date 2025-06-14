import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // Stil pentru titlu - ascuns pe ecrane mici
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  // Container pentru bara de căutare
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },

  // Stil pentru iconița de căutare
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Stil general pentru input
  inputRoot: {
    color: 'inherit',
  },

  // Stil detaliat pentru input (inclusiv padding și animație la lățime)
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },

  // Aranjare pe orizontală în bara de sus
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
