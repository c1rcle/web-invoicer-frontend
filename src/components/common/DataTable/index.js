import React from 'react';
import MaterialTable, { MTableToolbar } from 'material-table';
import useConfig from './config';
import useStyles from './styles';

const DataTable = props => {
  const { options, localization } = useConfig();

  const classes = useStyles();

  const components = {
    Toolbar: props => (
      <MTableToolbar
        classes={{
          root: classes.tableToolbar,
          searchField: classes.tableSearchField,
          ...props.classes
        }}
        {...props}
      />
    )
  };

  return (
    <div className={classes.tableContainer}>
      <MaterialTable
        options={options}
        localization={localization}
        components={components}
        {...props}
      />
    </div>
  );
};

export default DataTable;
