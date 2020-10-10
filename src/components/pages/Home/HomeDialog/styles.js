const { makeStyles } = require('@material-ui/core');

const useStyles = makeStyles(theme => ({
  dialogActions: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2, 3),
    justifyContent: 'center'
  },
  dialogTitle: {
    margin: 0,
    padding: theme.spacing(2),
    textAlign: 'center'
  },
  dialogCloseButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.text.secondary
  }
}));

export default useStyles;
