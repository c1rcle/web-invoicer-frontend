import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  editorContainer: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(3)
  },
  footerContainer: {
    marginTop: theme.spacing(3),
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

export default useStyles;
