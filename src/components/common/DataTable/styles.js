import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  tableContainer: {
    margin: theme.spacing(3, 0)
  },
  tableToolbar: {
    padding: theme.spacing(2),
    flexWrap: 'wrap',
    backgroundColor: 'fff'
  },
  tableSearchField: {
    paddingLeft: 0,
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(1),
      width: '100%'
    }
  }
}));

export default useStyles;
