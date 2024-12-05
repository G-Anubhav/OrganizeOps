import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/tasks/taskSlice";
import { TextField, Button, Box, Grid } from "@mui/material"; // Use standard Grid
const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const [year, month, day] = dueDate.split("-");
    const formattedDate = `${day}/${month}/${year}`;
    dispatch(
      addTask({ title, description, dueDate: formattedDate, completed: false })
    );
    setTitle("");
    setDescription("");
    setDueDate("");
  };
  const isFormValid = title && dueDate;
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ flexGrow: 1 }}>
      {" "}
      <Grid container spacing={2}>
        {" "}
        <Grid item xs={12} sm={6}>
          {" "}
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            fullWidth
          />{" "}
        </Grid>{" "}
        <Grid item xs={12} sm={6}>
          {" "}
          <TextField
            type="date"
            label="Due Date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            slotProps={{
              inputLabel: { shrink: true },
              htmlInput: { pattern: "\\d{4}-\\d{2}-\\d{2}" },
            }}
            required
            fullWidth
          />{" "}
        </Grid>{" "}
        <Grid item xs={12}>
          {" "}
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
          />{" "}
        </Grid>{" "}
        <Grid item xs={12}>
          {" "}
          <Button
            variant="contained"
            type="submit"
            disabled={!isFormValid}
            fullWidth
          >
            {" "}
            Add Task{" "}
          </Button>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </Box>
  );
};
export default TaskForm;
