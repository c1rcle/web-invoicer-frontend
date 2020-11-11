import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Button, Divider } from '@material-ui/core';
import SubmitButton from '../../../common/SubmitButton/SubmitButton';
import useStyles from './styles';

const Footer = ({ actionPending }) => {
  const { t } = useTranslation();

  const classes = useStyles();

  return (
    <>
      <Divider />
      <div className={classes.footerContainer}>
        <Box mr={1}>
          <SubmitButton text={t('save')} loading={actionPending} />
        </Box>
        <Button component={Link} to='/invoices' variant='outlined' color='primary' size='large'>
          {t('cancel')}
        </Button>
      </div>
    </>
  );
};

export default Footer;
