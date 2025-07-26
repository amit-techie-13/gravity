// TodoList.jsx
import TodoItem from "./todoItem";
import NoData from "./noData";
import { Box } from "@mui/material";

export default function TodoList({ tasks, onToggle, onDelete, onEdit }) {
  return (
    <Box sx={{ maxHeight: "600px", overflowY: "auto", px: 1 }}>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit} // only if you pass this from parent
          />
        ))
      ) : (
        <NoData />
      )}
    </Box>
  );
}
