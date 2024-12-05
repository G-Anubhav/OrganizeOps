import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskCompletion, deleteTask, editTask, reorderTasks } from '../features/tasks/taskSlice';
import { List, ListItem, ListItemText, Button, Box, TextField, Chip, Paper, Grid } from '@mui/material';
import dayjs from 'dayjs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ConfirmationDialog from './ConfirmationDialog';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);
  const searchQuery = useSelector((state) => state.tasks.searchQuery);
  const dispatch = useDispatch();
  const [editingTask, setEditingTask] = useState(null);
  const [editDetails, setEditDetails] = useState({ title: '', description: '', dueDate: '' });
  const [openDialog, setOpenDialog] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task.id);
    const [day, month, year] = task.dueDate.split('/');
    setEditDetails({ title: task.title, description: task.description, dueDate: `${year}-${month}-${day}` });
  };

  const handleSave = (task) => {
    const [year, month, day] = editDetails.dueDate.split("-");
    const formattedDate = `${day}/${month}/${year}`;
    dispatch(editTask({ ...task, ...editDetails, dueDate: formattedDate }));
    setEditingTask(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase());
    const taskDueDate = dayjs(task.dueDate, 'DD/MM/YYYY');
    const isOverdue = taskDueDate.isBefore(dayjs(), 'day');

    switch (filter) {
      case 'completed':
        return task.completed && matchesSearch;
      case 'pending':
        return !task.completed && matchesSearch;
      case 'overdue':
        return isOverdue && matchesSearch;
      default:
        return matchesSearch;
    }
  });

  const onDragEnd = (result) => {
    if (!result.destination) return;
    dispatch(reorderTasks({
      startIndex: result.source.index,
      endIndex: result.destination.index,
    }));
  };

  const handleDelete = (task) => {
    setTaskToDelete(task);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setTaskToDelete(null);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteTask({ id: taskToDelete.id }));
    setOpenDialog(false);
    setTaskToDelete(null);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="taskList">
        {(provided) => (
          <List {...provided.droppableProps} ref={provided.innerRef}>
            {filteredTasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <Paper
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    elevation={3}
                    sx={{ marginBottom: 2, padding: 2 }}
                  >
                    <ListItem
                      sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: { xs: 'flex-start', sm: 'center' }
                      }}
                    >
                      {editingTask === task.id ? (
                        <>
                          <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                            <Grid item xs={12} sm={4}>
                              <TextField
                                label="Title"
                                name="title"
                                value={editDetails.title}
                                onChange={handleChange}
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <TextField
                                label="Description"
                                name="description"
                                value={editDetails.description}
                                onChange={handleChange}
                                fullWidth
                              />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                              <TextField
                                type="date"
                                label="Due Date"
                                name="dueDate"
                                value={editDetails.dueDate}
                                onChange={handleChange}
                                fullWidth
                                slotProps={{
                                  inputLabel: {
                                    shrink: true,
                                  },
                                  htmlInput: {
                                    pattern: "\\d{4}-\\d{2}-\\d{2}",
                                  },
                                }}
                              />
                            </Grid>
                          </Grid>
                          <Button
                            variant="contained"
                            onClick={() => handleSave(task)}
                            sx={{ marginTop: { xs: 2, sm: 0 },marginLeft: { sm: 2 }, marginRight: { sm: 2 } }}
                          >
                            Save
                          </Button>
                        </>
                      ) : (
                        <>
                          <ListItemText
                            primary={task.title}
                            secondary={`${task.description} - Due: ${task.dueDate}`}
                            sx={{ marginRight: { sm: 2 }, flexGrow: 1 }}
                          />
                          {task.completed && (
                            <Chip label="Completed" color="success" sx={{ marginRight: { sm: 2 }, marginTop: { xs: 2, sm: 0 } }} />
                          )}
                          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                            <Button variant="contained" onClick={() => dispatch(toggleTaskCompletion({ id: task.id }))}>
                              {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
                            </Button>
                            <Button variant="contained" onClick={() => handleEdit(task)}>Edit</Button>
                            <Button variant="contained" color="error" onClick={() => handleDelete(task)}>
                              Delete
                            </Button>
                          </Box>
                        </>
                      )}
                    </ListItem>
                  </Paper>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
      <ConfirmationDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        handleConfirm={handleConfirmDelete}
      />
    </DragDropContext>
  );
};

export default TaskList;
