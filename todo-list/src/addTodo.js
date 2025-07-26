import { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Add task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Stack>
  );
}
