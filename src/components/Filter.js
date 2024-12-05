import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/tasks/taskSlice';
import { Button, Box, Grid } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);

  return (
    <Box sx={{ flexGrow: 1, mb: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={6} sm={3}>
          <Button variant={filter === 'all' ? 'contained' : 'outlined'} onClick={() => dispatch(setFilter('all'))} fullWidth>
            All Tasks
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant={filter === 'completed' ? 'contained' : 'outlined'} onClick={() => dispatch(setFilter('completed'))} fullWidth>
            Completed Tasks
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant={filter === 'pending' ? 'contained' : 'outlined'} onClick={() => dispatch(setFilter('pending'))} fullWidth>
            Pending Tasks
          </Button>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Button variant={filter === 'overdue' ? 'contained' : 'outlined'} onClick={() => dispatch(setFilter('overdue'))} fullWidth>
            Overdue Tasks
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Filter;
