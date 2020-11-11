import React from 'react';
import { ValidatorForm } from 'react-material-ui-form-validator';
import ErrorDialog from '../../../common/ErrorDialog';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import useEditor from './useEditor';
import useStyles from './styles';
import { Paper } from '@material-ui/core';

const Editor = () => {
  const { onSubmit, actionPending, error, setError } = useEditor();

  const classes = useStyles();

  return (
    <>
      <ErrorDialog error={error} clearAction={setError} />
      <Paper className={classes.editorContainer}>
        <ValidatorForm onSubmit={onSubmit} noValidate>
          <Header />
          <Content />
          <Footer actionPending={actionPending} />
        </ValidatorForm>
      </Paper>
    </>
  );
};

export default Editor;
