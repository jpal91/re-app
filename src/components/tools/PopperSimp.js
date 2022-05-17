import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import KeyIcon from '@mui/icons-material/Key';
import Popper from '@mui/material/Popper';

const PopperSimp = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      <IconButton aria-describedby={id} onClick={handleClick}>
        <KeyIcon />
      </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
          {props.kw}
        </Box>
      </Popper>
    </div>
  );
}

export default PopperSimp