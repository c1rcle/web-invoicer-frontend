const { makeStyles } = require('@material-ui/core');

const useStyles = makeStyles(theme => ({
  dialogAlert: {
    margin: theme.spacing(3, 3, 0)
  },
  dialogActions: {
    padding: theme.spacing(2, 3),
    justifyContent: 'center'
  }
}));

export default useStyles;
