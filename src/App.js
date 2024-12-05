import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import Search from './components/Search';
import getTheme from './theme';

const App = () => {
  const theme = getTheme();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={{ marginBottom: 4 }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Task Management Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              {/* <Typography variant="h4" component="h1" gutterBottom>
                Task Management Dashboard
              </Typography> */}
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TaskForm />
              </Grid>
              <Grid item xs={12}>
                <Search />
              </Grid>
              <Grid item xs={12}>
                <Filter />
              </Grid>
              <Grid item xs={12}>
                <TaskList />
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
