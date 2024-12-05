import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../features/tasks/taskSlice';
import { TextField, Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.tasks.searchQuery);

  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <Box sx={{ marginBottom: 2 }}>
      <TextField
        label="Search Tasks"
        value={searchQuery}
        onChange={handleChange}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
