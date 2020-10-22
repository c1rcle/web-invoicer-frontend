import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  appBarSpacer: {
    marginRight: theme.spacing(1)
  },
  appBarLogo: {
    marginRight: 4
  },
  appBarTitle: {
    userSelect: 'none',
    flexGrow: 1
  }
}));

export default useStyles;
