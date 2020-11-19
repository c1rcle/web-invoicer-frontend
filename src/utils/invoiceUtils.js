import apiHandler from '../apis/apiHandler';
import webInvoicerApi from '../apis/webInvoicerApi';
import { filterProperties } from './dataUtils';
import { getType } from './editorUtils';

const useInvoicePayloadCreators = () => {
  const createPayload = invoice => async () => {
    const { employee, counterparty, items, ...invoiceData } = invoice;

    const employeeId = await getEmployeeId(employee);
    const counterpartyId = await getCounterpartyId(counterparty, invoiceData.type);

    const invoiceId = (
      await handleAction({
        method: () =>
          webInvoicerApi().post('Invoices', { ...invoiceData, employeeId, counterpartyId }),
        errorData: 'invoice'
      })
    ).id;

    await addNewItems(invoiceId, items);
  };

  const getPayload = async () => {
    const employees = await handleAction({
      method: () => webInvoicerApi().get('Employees'),
      errorData: 'employees'
    });

    const counterparties = await handleAction({
      method: () => webInvoicerApi().get('Counterparties'),
      errorData: 'counterparties'
    });

    let invoices = await handleAction({
      method: () => webInvoicerApi().get('Invoices'),
      errorData: 'invoices'
    });

    invoices = invoices.map(invoice => {
      const { employeeId, counterpartyId, ...rest } = invoice;
      return {
        ...rest,
        employee: employees.find(x => x.id === employeeId),
        counterparty: counterparties.find(x => x.id === counterpartyId)
      };
    });

    return { invoices, employees, counterparties };
  };

  const updatePayload = (oldInvoice, invoice) => async () => {
    const { id, type, employee, counterparty, items, ...invoiceData } = invoice;
    const oldInvoiceData = extractInvoice(oldInvoice);

    const employeeId = await getEmployeeId(employee);
    const counterpartyId = await getCounterpartyId(counterparty, type);

    const updateData = filterProperties(oldInvoiceData, {
      ...invoiceData,
      employeeId,
      counterpartyId
    });

    updateData &&
      (await handleAction({
        method: () => webInvoicerApi().put('Invoices', { id, type, ...updateData }),
        errorData: 'invoice'
      }));

    await updateItems(invoice.id, oldInvoice.items, items);
  };

  const getEmployeeId = async employee => {
    if (!employee.id) {
      return (
        await handleAction({
          method: () => webInvoicerApi().post('Employees', employee),
          errorData: 'employee'
        })
      ).id;
    } else return employee.id;
  };

  const getCounterpartyId = async (counterparty, type) => {
    if (!counterparty?.id && type !== getType('receipt')) {
      return (
        await handleAction({
          method: () => webInvoicerApi().post('Counterparties', counterparty),
          errorData: 'counterparty'
        })
      ).id;
    } else return counterparty?.id;
  };

  const addNewItems = async (invoiceId, items) => {
    for (let index = 0; index < items.length; index++) {
      const { count, unit, editorId, ...productData } = items[index];
      let productId = items[index].id;

      if (!productId) {
        productId = (
          await handleAction({
            method: () => webInvoicerApi().post('Products', productData),
            errorData: 'product'
          })
        ).id;
      }

      await handleAction({
        method: () =>
          webInvoicerApi().post('InvoiceItems', { invoiceId, productId, index, count, unit }),
        errorData: 'item'
      });
    }
  };

  const updateItems = async (invoiceId, oldItems, newItems) => {
    await addNewItems(
      invoiceId,
      newItems.filter(x => x.itemId === undefined)
    );

    for (const item of oldItems) {
      const newItemIndex = newItems.findIndex(x => x.itemId === item.itemId);

      if (newItemIndex !== -1) {
        const newItem = { ...extractItem(newItems[newItemIndex]), index: newItemIndex };
        const updateData = filterProperties(extractItem(item), newItem);

        updateData &&
          (await handleAction({
            method: () =>
              webInvoicerApi().put('InvoiceItems', { ...updateData, itemId: item.itemId }),
            errorData: 'item'
          }));
      } else {
        await handleAction({
          method: () => webInvoicerApi().delete(`InvoiceItems/${item.itemId}`),
          errorData: 'item'
        });
      }
    }
  };

  const handleAction = async ({ method, errorData }) => {
    const response = await apiHandler(method(), errorData);

    if (response.type === 'ERROR') {
      throw new Error(response.data);
    }
    return response.data;
  };

  const extractInvoice = ({ employee, counterparty, items, ...rest }) => ({
    ...rest,
    employeeId: employee.id,
    counterpartyId: counterparty?.id
  });

  const extractItem = ({ id, index, count, unit }) => ({ id, index, count, unit });

  return { createPayload, getPayload, updatePayload };
};

export default useInvoicePayloadCreators;
