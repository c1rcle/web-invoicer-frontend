import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 250
  },
  drawerPaper: {
    width: 250
  },
  drawerHeader: {
    width: 250,
    padding: theme.spacing(0, 1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar
  },
  drawerHighlight: {
    background: theme.palette.primary.main
  },
  drawerHighlightText: {
    color: theme.palette.getContrastText(theme.palette.primary.main)
  }
}));

export default useStyles;
