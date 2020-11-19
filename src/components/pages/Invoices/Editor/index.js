import React from 'react';
import { Backdrop, CircularProgress, Paper } from '@material-ui/core';
import ErrorDialog from '../../../common/ErrorDialog';
import ValidatorForm from './ValidatorForm';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import useEditor from './useEditor';
import useStyles from './styles';

const Editor = () => {
  const { onSubmit, actionPending, error, setError } = useEditor();

  const classes = useStyles();

  return (
    <>
      <Backdrop open={actionPending} transitionDuration={500} className={classes.backdrop}>
        <CircularProgress />
      </Backdrop>
      <ErrorDialog error={error} clearAction={setError} />
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
