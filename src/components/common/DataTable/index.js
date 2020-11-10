import React from 'react';
import MaterialTable from 'material-table';
import useConfig from './config';
import useStyles from './styles';

const DataTable = ({ data, editableConfig = null, ...props }) => {
  const { options, icons, localization, editable } = useConfig(editableConfig);

  const classes = useStyles();

  return (
    <div className={classes.tableContainer}>
      <MaterialTable
        data={data}
        options={options}
        icons={icons}
        localization={localization}
        editable={editable}
        {...props}
      />
    </div>
  );
};

export default DataTable;
