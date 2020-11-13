import React from 'react';
import { Autocomplete as MaterialAutocomplete } from '@material-ui/lab';
import EditorTextField from './EditorTextField';

const Autocomplete = ({ textProps, ...props }) => {
  return (
    <MaterialAutocomplete
      freeSolo
      fullWidth
      results={5}
      renderInput={props => <EditorTextField {...props} {...textProps} variant='outlined' />}
      {...props}
    />
  );
};

export default Autocomplete;
