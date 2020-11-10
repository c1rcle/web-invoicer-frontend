import { useState } from 'react';

const useDialog = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [dialogData, setDialogData] = useState(null);

  const openDialog = data => {
    setIsDialogOpen(true);
    data && setDialogData(data);
  };

  const closeDialog = () => setIsDialogOpen(false);

  return { isDialogOpen, dialogData, openDialog, closeDialog };
};

export default useDialog;
