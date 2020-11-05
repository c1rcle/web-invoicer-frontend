import { useTranslation } from 'react-i18next';
import { createEmployee, deleteEmployee, updateEmployee } from '../../../slices/employeeSlice';
import useValidation from '../../../hooks/useValidation';

const useConfig = () => {
  const { t } = useTranslation();

  const { required, validate } = useValidation();

  const columns = [
    {
      title: t('employees.fullName'),
      field: 'fullName',
      width: 190,
      validate: row => required(row.fullName)
    },
    {
      title: t('employees.phoneNumber'),
      field: 'phoneNumber',
      width: 190,
      validate: row => validate('phoneNumber', row.phoneNumber, true)
    },
    {
      title: t('employees.dateAdded'),
      field: 'dateAdded',
      width: 190,
      type: 'datetime',
      editable: 'never'
    }
  ];

  const editableConfig = {
    createAction: createEmployee,
    updateAction: updateEmployee,
    deleteAction: deleteEmployee,
    idKey: 'employeeId'
  };

  return { columns, editableConfig };
};

export default useConfig;
