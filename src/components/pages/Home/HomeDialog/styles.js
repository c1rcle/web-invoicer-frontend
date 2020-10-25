const { makeStyles } = require('@material-ui/core');

const useStyles = makeStyles(theme => ({
  dialogTitle: {
    margin: 0,
    padding: theme.spacing(2, 2, 0),
    textAlign: 'center'
  },
  dialogCloseButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.text.secondary
  },
  dialogAlert: {
    margin: theme.spacing(3, 3, 0)
  },
  dialogActions: {
    padding: theme.spacing(2, 3),
    justifyContent: 'center'
  }
}));

export default useStyles;