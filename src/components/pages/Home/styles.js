import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  heroContainer: {
    width: 'fit-content',
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    [theme.breakpoints.only('xs')]: {
      flexDirection: 'column'
    }
  },
  heroItem: {
    marginTop: 'auto',
    marginBottom: 'auto',
    [theme.breakpoints.only('xs')]: {
      textAlign: 'center'
    }
  },
  heroIcon: {
    fontSize: '6rem',
    marginRight: theme.spacing(2),
    [theme.breakpoints.only('xs')]: {
      marginRight: 0
    }
  },
  featureCard: {
    height: '100%'
  },
  featureIcon: {
    fontSize: '5rem'
  }
}));

export default useStyles;
