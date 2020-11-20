import React from 'react';
import { Paper } from '@material-ui/core';
import ErrorDialog from '../../../common/ErrorDialog';
import ValidatorForm from '../../../common/ValidatorForm';
import LoadingBackdrop from './LoadingBackdrop';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import useEditor from './useEditor';
import useStyles from './styles';

const Editor = () => {
  const { onSubmit, actionPending, error, onErrorDialogClose } = useEditor();

  const classes = useStyles();

  return (
    <>
      <LoadingBackdrop actionPending={actionPending} className={classes.backdrop} />
      <ErrorDialog error={error} onClose={onErrorDialogClose} />
      <Paper className={classes.editorContainer}>
        <ValidatorForm onSubmit={onSubmit} noValidate>
          <Header />
          <Content />
          <Footer />
        </ValidatorForm>
      </Paper>
    </>
  );
};

export default Editor;
