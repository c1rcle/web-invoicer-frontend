import React from 'react';
import { useTranslation } from 'react-i18next';
import DateFnsUtils from '@date-io/date-fns';
import * as locales from 'date-fns/locale';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const DatePicker = ({ onChange, permitPast = false, ...props }) => {
  const { i18n } = useTranslation();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locales[i18n.language]}>
      <KeyboardDatePicker
        disablePast={!permitPast}
        variant='inline'
        inputVariant='outlined'
        fullWidth
        format='dd/MM/yyyy'
        onChange={(date, _) => onChange(new Date(date).toISOString())}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
