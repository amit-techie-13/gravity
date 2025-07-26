import {
  Paper,
  Checkbox,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


export default function TodoItem({ task, onToggle, onDelete }) {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 2,
        mb: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 2,
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Checkbox
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          sx={{ color: "#3B82F6" }}
        />
        <Typography
          variant="body1"
          sx={{
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "gray" : "inherit",
          }}
        >
          {task.text}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1}>
        <IconButton color="error" onClick={() => onDelete(task)}>
          <DeleteIcon />
        </IconButton>
      </Stack>
    </Paper>
  );
}
