import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import DataTable from '../../common/DataTable';
import ErrorDialog from '../../common/ErrorDialog';
import { getCounterparties, setError } from '../../../slices/counterpartySlice';
import useConfig from './config';

const Counterparties = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const counterparties = useSelector(state => state.counterparty.counterpartyData);

  const actionPending = useSelector(state => state.counterparty.actionPending);

  const error = useSelector(state => state.counterparty.error);

  const { columns, editableConfig } = useConfig();

  useEffect(() => {
    dispatch(getCounterparties());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ErrorDialog error={error} clearAction={setError} />
      <DataTable
        title={t('counterparties.title')}
        isLoading={actionPending}
        sourceData={counterparties}
        columns={columns}
        editableConfig={editableConfig}
      />
    </>
  );
};

export default Counterparties;
