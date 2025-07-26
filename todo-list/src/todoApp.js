import React, { useState, useEffect,useRef  } from "react";
import AddTodo from "./addTodo";
import TodoList from "./todoList";
import Filter from "./filterTodo";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography
} from "@mui/material";


const TodoApp = () => {
 const [tasks, setTasks] = useState(() => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [];
});
const fetchCalled = useRef(false);

  const [filter, setFilter] = useState("all");
  const [deletingTask, setDeletingTask] = useState(null);
const [deleteTaskId, setDeleteTaskId] = useState(0);

  const fetchDummyTodos = async () => {
  // Prevent multiple loads
  const dummyLoaded = localStorage.getItem("dummyLoaded");
  if (dummyLoaded) {
    return;
  }

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await res.json();

    const formatted = data.map((todo) => ({
      id: todo.id + Date.now(), 
      text: todo.title,
      completed: todo.completed,
    }));

    setTasks((prev) => [...formatted, ...prev]);
    localStorage.setItem("dummyLoaded", "true");
  } catch (err) {
    console.error("Failed to fetch dummy todos:", err);
  }
};


  useEffect(() => {
    const dataFetchNeeded = localStorage.getItem("dummyLoaded");

    // ✅ Prevent double-fetch due to React Strict Mode
    if (!dataFetchNeeded && !fetchCalled.current) {
      fetchCalled.current = true;
      fetchDummyTodos();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    // console.log(tasks)
  }, [tasks]);

  const addTodo = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([newTask, ...tasks]);
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (task) => {
    // console.log("🚀 ~ deleteTodo ~ id:", id)
    setDeleteTaskId(task.id)
    setDeletingTask(!task?.completed)
    if(task.completed){
        setTasks(tasks.filter(t => t.id !== task.id));
    }
  };


    const handleDelete = () => {
    setTasks(tasks.filter(t => t.id !== deleteTaskId));
    setDeletingTask(false)
    setDeleteTaskId(0)
  };


  const filteredTasks = tasks.filter(task =>
    filter === "all" ? true :
    filter === "completed" ? task.completed :
    !task.completed
  );

  return (
    <div style={{margin:'10px'}}>
      <h1>My To-Do List</h1>
      <AddTodo onAdd={addTodo} />
      <Filter current={filter} setFilter={setFilter} />
      
      <TodoList
        tasks={filteredTasks}
        onToggle={toggleComplete}
        onDelete={deleteTodo}
      />
      
     
      <Dialog open={!!deletingTask} onClose={() => setDeletingTask(null)} fullWidth>
  <DialogTitle>Delete Task</DialogTitle>
  <DialogContent>
     <Typography
          variant="body1"
        >
          {'Are you sure , you want to delete this task?'}
        </Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setDeletingTask(null)}>Cancel</Button>
    <Button variant="contained" onClick={handleDelete}>
      Delete
    </Button>
  </DialogActions>
</Dialog>
    </div>
  );
};

export default TodoApp;
