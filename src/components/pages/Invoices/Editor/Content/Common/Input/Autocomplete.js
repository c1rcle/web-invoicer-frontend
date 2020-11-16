import React from 'react';
import { Autocomplete as MaterialAutocomplete, createFilterOptions } from '@material-ui/lab';
import EditorTextField from './EditorTextField';

const Autocomplete = ({ textProps, ...props }) => {
  const filterOptions = createFilterOptions({
    limit: 5
  });

  return (
    <MaterialAutocomplete
      freeSolo
      fullWidth
      filterOptions={filterOptions}
      renderInput={props => <EditorTextField {...props} {...textProps} variant='outlined' />}
      {...props}
    />
  );
};

export default Autocomplete;
