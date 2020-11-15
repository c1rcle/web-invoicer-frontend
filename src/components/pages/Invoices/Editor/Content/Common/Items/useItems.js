import { useSelector } from 'react-redux';
import useActions from './actions';
import useFields from './fields';

const useItems = () => {
  const actions = useActions();

  const getFields = useFields(actions);

  const editorItems = useSelector(state => state.invoice.editorData.items);

  const itemRows = editorItems.map(item => {
    return { editorId: item.editorId, fields: getFields(item) };
  });

  return { actions, itemRows };
};

export default useItems;
