import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import useConfig from './config';
import useStyles from './styles';

const DataTable = ({ sourceData, editableConfig, ...props }) => {
  const [data, setData] = useState([]);

  const { options, icons, localization, editable } = useConfig(editableConfig, data, setData);

  const classes = useStyles();

  useEffect(() => {
    sourceData.length !== 0 && setData(sourceData.map(x => ({ ...x })));
  }, [sourceData]);

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
