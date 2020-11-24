import React from 'react';
import { useTranslation } from 'react-i18next';
import DateFnsUtils from '@date-io/date-fns';
import enLocale from 'date-fns/locale/en-GB';
import plLocale from 'date-fns/locale/pl';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

const locales = {
  en: enLocale,
  pl: plLocale
};

const DatePicker = ({ onChange, minDate, ...props }) => {
  const { i18n } = useTranslation();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={locales[i18n.language]}>
      <KeyboardDatePicker
        disablePast={!Boolean(minDate)}
        variant='inline'
        inputVariant='outlined'
        fullWidth
        format='dd/MM/yyyy'
        onChange={(date, _) => onChange(new Date(date).toISOString())}
        {...(minDate && { minDate: minDate })}
        {...props}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
