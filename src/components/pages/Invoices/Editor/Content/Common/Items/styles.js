import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  bottomContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  addButton: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  summaryContainer: {
    padding: theme.spacing(3),
    textAlign: 'end'
  }
}));

export default useStyles;
