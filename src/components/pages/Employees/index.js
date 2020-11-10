import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import DataTable from '../../common/DataTable';
import ErrorDialog from '../../common/ErrorDialog';
import { getEmployees, setError } from '../../../slices/employeeSlice';
import useConfig from './config';

const Employees = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const employees = useSelector(state => state.employee.employeeData);

  const actionPending = useSelector(state => state.employee.actionPending);

  const error = useSelector(state => state.employee.error);

  const { columns, editableConfig } = useConfig();

  useEffect(() => {
    dispatch(getEmployees());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ErrorDialog error={error} clearAction={setError} />
      <DataTable
        title={t('employees.title')}
        isLoading={actionPending}
        data={employees}
        columns={columns}
        editableConfig={editableConfig}
      />
    </>
  );
};

export default Employees;
