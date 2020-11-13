import React, { useEffect } from 'react';
import { ValidatorForm as Form } from 'react-material-ui-form-validator';
import useValidation from '../../../../hooks/useValidation';

const ValidatorForm = ({ children, ...props }) => {
  const { validate } = useValidation();

  const booleanResult = result => (result === true ? true : false);

  const validationRules = [
    { name: 'validNip', validator: value => booleanResult(validate('validNip', value, true)) },
    { name: 'currency', validator: value => booleanResult(validate('currency', value, true)) },
    { name: 'phoneNumber', validator: value => booleanResult(validate('phoneNumber', value)) },
    { name: 'postalCode', validator: value => booleanResult(validate('postalCode', value, true)) }
  ];

  useEffect(() => {
    validationRules.forEach(rule => Form.addValidationRule(rule.name, rule.validator));
    return () => validationRules.forEach(rule => Form.removeValidationRule(rule.name));
    // eslint-disable-next-line
  }, []);

  return <Form {...props}>{children}</Form>;
};

export default ValidatorForm;
