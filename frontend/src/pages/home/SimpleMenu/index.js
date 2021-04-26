import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Select a Database Operation
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>List Citizen</MenuItem>
        <MenuItem onClick={handleClose}>Add Citizen</MenuItem>
        <MenuItem onClick={handleClose}>Edit Citizen</MenuItem>
        <MenuItem onClick={handleClose}>List Vaccine</MenuItem>
        <MenuItem onClick={handleClose}>Add Vacine</MenuItem>
        <MenuItem onClick={handleClose}>List Religion</MenuItem>
        <MenuItem onClick={handleClose}>Add Religion</MenuItem>
        <MenuItem onClick={handleClose}>List Allergy</MenuItem>
        <MenuItem onClick={handleClose}>Add Allergy</MenuItem>
        <MenuItem onClick={handleClose}>List Health Plan</MenuItem>
        <MenuItem onClick={handleClose}>Add Health Plan</MenuItem>
      </Menu>
    </div>
  );
}