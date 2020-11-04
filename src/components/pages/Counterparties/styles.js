import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  nipEditContainer: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center'
  },
  nipEditButton: {
    marginLeft: theme.spacing(1)
  }
}));

export default useStyles;
