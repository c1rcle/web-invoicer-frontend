import React, { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { AddCircle, Check, Clear, Delete, Edit } from '@material-ui/icons';
import useHandleAction from '../../../hooks/useHandleAction';
import { filterProperties } from '../../../utils/dataUtils';

const useConfig = editableConfig => {
  const { t } = useTranslation();

  const handleAction = useHandleAction();

  const options = {
    searchFieldVariant: 'outlined',
    addRowPosition: 'first',
    tableLayout: 'fixed',
    draggable: false
  };

  const getIcon = (Component, iconProps) =>
    forwardRef((props, ref) => <Component {...props} ref={ref} color='primary' {...iconProps} />);

  const icons = {
    Add: getIcon(AddCircle, { fontSize: 'large' }),
    Check: getIcon(Check),
    Clear: getIcon(Clear),
    Delete: getIcon(Delete),
    Edit: getIcon(Edit),
    ResetSearch: getIcon(Clear, { style: { marginRight: -16 }, color: 'inherit' })
  };

  const localization = {
    body: {
      emptyDataSourceMessage: t('table.empty'),
      addTooltip: t('table.add'),
      deleteTooltip: t('table.delete'),
      editTooltip: t('table.edit'),
      filterRow: {
        filterTooltip: t('table.filter')
      },
      editRow: {
        deleteText: t('table.deleteText'),
        cancelTooltip: t('table.cancel'),
        saveTooltip: t('table.save')
      }
    },
    header: {
      actions: t('table.actions')
    },
    pagination: {
      labelDisplayedRows: t('table.rows'),
      labelRowsSelect: t('table.rowsSelect'),
      labelRowsPerPage: t('table.rowsPerPage'),
      firstAriaLabel: t('table.first'),
      firstTooltip: t('table.first'),
      previousAriaLabel: t('table.previous'),
      previousTooltip: t('table.previous'),
      nextAriaLabel: t('table.next'),
      nextTooltip: t('table.next'),
      lastAriaLabel: t('table.last'),
      lastTooltip: t('table.last')
    },
    toolbar: {
      nRowsSelected: t('table.rowsSelected'),
      searchTooltip: t('table.search'),
      searchPlaceholder: t('table.search')
    }
  };

  let editable = null;

  if (editableConfig) {
    const { createAction, updateAction, deleteAction } = editableConfig;

    editable = {
      onRowAdd: newRow => handleAction({ action: createAction(newRow), rejectOnError: true }),
      onRowUpdate: async (newRow, oldRow) => {
        const updateData = filterProperties(oldRow, newRow);

        if (updateData) {
          await handleAction({
            action: updateAction({ id: newRow.id, ...updateData }),
            rejectOnError: true
          });
        }
      },
      onRowDelete: deletedRow =>
        handleAction({ action: deleteAction(deletedRow.id), rejectOnError: true })
    };
  }

  return { options, icons, localization, editable };
};

export default useConfig;
