import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1
  },
  editorContainer: {
    margin: theme.spacing(3, 0),
    padding: theme.spacing(3)
  },
  footerDivider: {
    margin: theme.spacing(0, -3)
  },
  footerContainer: {
    marginTop: theme.spacing(3),
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

export default useStyles;
