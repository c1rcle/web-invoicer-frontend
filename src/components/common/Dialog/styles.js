import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  dialogTitle: ({ centered }) => ({
    margin: 0,
    padding: centered ? theme.spacing(2, 8, 0) : theme.spacing(2, 8, 2, 3),
    textAlign: centered ? 'center' : 'initial'
  }),
  dialogCloseButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
    color: theme.palette.text.secondary
  }
}));

export default useStyles;
