import { Button, ButtonGroup, Box } from "@mui/material";

export default function Filter({ current, setFilter }) {
  return (
    <Box display="flex" justifyContent="center" my={2}>
      <ButtonGroup variant="outlined" color="primary">
        <Button
          variant={current === "all" ? "contained" : "outlined"}
          onClick={() => setFilter("all")}
        >
          All
        </Button>
        <Button
          variant={current === "completed" ? "contained" : "outlined"}
          onClick={() => setFilter("completed")}
        >
          Completed
        </Button>
        <Button
          variant={current === "pending" ? "contained" : "outlined"}
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
      </ButtonGroup>
    </Box>
  );
}
