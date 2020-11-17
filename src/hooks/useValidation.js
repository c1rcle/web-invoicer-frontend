import { useTranslation } from 'react-i18next';
import validator from 'validator';

const useValidation = () => {
  const { t } = useTranslation();

  const validNip = value => {
    const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7, 0];

    if (value.length !== 10 || !validator.isNumeric(value)) return false;

    let sum = 0;
    Array.from(value).forEach((char, index) => (sum += Number(char) * weights[index]));
    return sum % 11 === Number(value[9]);
  };

  const positiveInt = value => {
    return validator.isInt(value, { gt: 0, allow_leading_zeroes: false });
  };

  const currency = value => {
    return (
      Number(value) > 0 &&
      validator.isCurrency(value, {
        allow_negatives: false,
        digits_after_decimal: [1, 2],
        symbol: ''
      })
    );
  };

  const phoneNumber = value => {
    return validator.isMobilePhone(value, ['pl-PL']);
  };

  const postalCode = value => {
    return validator.isPostalCode(value, ['PL']);
  };

  const required = value => {
    const coercedValue = value + '';
    const isInvalid = !value || validator.isEmpty(coercedValue, { ignore_whitespace: true });

    return isInvalid ? t('validation.required') : true;
  };

  const validate = (validationType, value, isRequired) => {
    const coercedValue = value + '';
    if (!isRequired && (!value || coercedValue.length === 0)) return true;

    const result = () => {
      switch (validationType) {
        case 'validNip':
          return validNip(coercedValue);
        case 'positiveInt':
          return positiveInt(coercedValue);
        case 'currency':
          return currency(coercedValue);
        case 'phoneNumber':
          return phoneNumber(coercedValue);
        case 'postalCode':
          return postalCode(coercedValue);
        default:
          throw new Error('Validation type not supported!');
      }
    };

    return result() ? true : t(`validation.${validationType}`);
  };

  return { required, validate };
};

export default useValidation;
