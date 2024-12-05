// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={Link} to="/tasks">
          <ListItemText primary="Tasks" />
        </ListItem>
        <ListItem button component={Link} to="/analytics">
          <ListItemText primary="Analytics" />
        </ListItem>
        {/* Add more navigation items as needed */}
      </List>
    </Drawer>
  );
};

export default Sidebar;
