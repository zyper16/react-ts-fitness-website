import { Box, Stack } from "@mui/material";
import ExerciseCard from "./ExerciseCard";

export default function Exercises({ exercises }) {
  return (
    <Box width="400px">
      <Stack direction="row" spacing={2}>
        {exercises.map(exercise => (
          <ExerciseCard exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
}
