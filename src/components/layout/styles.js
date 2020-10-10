import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBarSpacer: {
    marginRight: theme.spacing(1)
  },
  appBarLogo: {
    marginRight: 4
  },
  appBarTitle: {
    flexGrow: 1
  },
  drawerHeader: {
    width: 240,
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
