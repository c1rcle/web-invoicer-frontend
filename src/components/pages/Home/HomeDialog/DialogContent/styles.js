import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  dialogText: {
    display: 'block',
    marginTop: theme.spacing(3),
    textAlign: 'center'
  },
  dialogConfirmContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(3, 0)
  },
  dialogProgress: {
    marginRight: theme.spacing(2)
  }
}));

export default useStyles;
