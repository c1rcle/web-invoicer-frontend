import { useTranslation } from 'react-i18next';

const useConfig = () => {
  const { t } = useTranslation();

  const options = {
    searchFieldVariant: 'outlined'
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

  return { options, localization };
};

export default useConfig;
