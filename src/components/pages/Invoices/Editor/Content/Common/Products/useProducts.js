import { useSelector } from 'react-redux';
import useActions from './actions';
import useFields from './fields';

const useProducts = () => {
  const actions = useActions();

  const getFields = useFields(actions);

  const editorProducts = useSelector(state => state.invoice.editorData.products);

  const productRows = editorProducts.map(product => {
    return { editorId: product.editorId, fields: getFields(product) };
  });

  return { actions, productRows };
};

export default useProducts;
