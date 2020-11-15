import { Box, IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';

const ClearButton = ({ onClick }) => {
  return (
    <Box ml={1}>
      <IconButton onClick={onClick} size='small'>
        <Delete color='primary' />
      </IconButton>
    </Box>
  );
};

export default ClearButton;
